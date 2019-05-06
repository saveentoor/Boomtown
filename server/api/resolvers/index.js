
const { ApolloError } = require('apollo-server-express');


const authMutations = require('./auth');

const { DateScalar } = require('../custom-types');

module.exports = app => {
  Date: DateScalar;
  return {
    Query: {
      viewer(parent, args, context, info) {
        if (context.token) {
          return context.token;
        }
        return null;
      },
      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(parent, args, { pgResource }) {
        try {
          return await pgResource.getTags();
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },
    User: {
      async items({ id }, args, { pgResource }) {
        try {
          return await pgResource.getItemsForUser(id);
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrowed({ id }, args, { pgResource }) {
        try {
          const borrowedItem = await pgResource.getBorrowedItemsForUser(id);
          return borrowedItem;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },
    Item: {
      async itemowner(item, args, { pgResource }) {
        try {
          const itemOwnerId = await pgResource.getUserById(item.ownerid);
          return itemOwnerId;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(item, args, { pgResource }) {
        try {
          const tags = await pgResource.getTagsForItem(item.id);
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrower({ id }, args, { pgResource }) {
        try {
          const borrowerItemID = await pgResource.getBorrowedItemsForUser(id);
        
          return borrowerItemID;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },
    Mutation: {
      ...authMutations(app),
      async addItem(parent, { item }, context, info) {
        try {
          const user = context.token.id;
          const newItem = await context.pgResource.saveNewItem({
            item: item,
            user
          });
          return newItem;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    }
  };
};

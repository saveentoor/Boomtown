/**
 *  It will also help you control th error output of your resource methods and use error
 *  messages on the client! (More on that later).
 *
 *  The user resolver has been completed as an example of what you'll need to do.
 *  Finish of the rest of the resolvers when you're ready.
 */
const { ApolloError } = require('apollo-server-express');

//const jwt = require('jsonwebtoken');
const authMutations = require('./auth');

const { DateScalar } = require('../custom-types');

module.exports = app => {
  return {
    //Date: DateScalar,
    Query: {
      viewer() {
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
          console.log('id', borrowerItemID);
          return borrowerItemID;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },
    Mutation: {
      ...authMutations(app),
      async addItem(parent, args, { pgResource }, info) {
        //image = await image;
        try {
          // const user = await jwt.decode(token, app.get('JWT_SECRET'));
          const user = { id: '1' };
          const newItem = await pgResource.saveNewItem({
            item: args.item,
            //image: args.image,
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

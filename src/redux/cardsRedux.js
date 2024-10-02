import shortid from 'shortid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const addCard = (title, columnId) => ({type: ADD_CARD, payload: { title, columnId }});
export const getFavoriteCards = ({ cards }) => {return cards.filter(card => card.isFavorite)};

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');

export const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
export const DELETE_CARD = createActionName('DELETE_CARD')

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      case DELETE_CARD:
        return statePart.filter(card => card.id !== action.payload);
      default:
        return statePart;
    }
  }

export default cardsReducer;
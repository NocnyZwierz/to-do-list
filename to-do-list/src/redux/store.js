import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addList = payload => ({type: 'ADD_LIST', payload});

export const addCard = (payload, columnId) => ({type: 'ADD_CARD', payload: { card: payload, columnId }});

export const updateSearchString = (payload) => ({type: 'UPDATE_SEARCH', payload});

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getAllLists = (state) => state.lists;

export const getFavoriteCards = ({ cards }) => {return cards.filter(card => card.isFavorite)};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_COLUMN':
            return {...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};
        case 'ADD_LIST':
            return {...state, lists: [...state.lists, { id: shortid(), ...action.payload}]};
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload.card, columnId: action.payload.columnId }]};
        case 'UPDATE_SEARCH':
            return { ...state, searchString: action.payload };
        case 'TOGGLE_CARD_FAVORITE':
            return { ...state, cards: state.cards.map(card => card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card)};
        default:
            return state;
    }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
let initialState = {
    contactList: [],
    keyword: '',
};

function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    { name: payload.name, phoneNumber: payload.phoneNumber, id: payload.id },
                ],
            };

        case 'SEARCH':
            return { ...state, keyword: payload.keyword };
        case 'UPDATE_CONTACT_LIST':
            return { ...state, contactList: payload.contactList };
        default:
            return { ...state };
    }
}

export default reducer;

import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contactList = useSelector((state) => state.contactList);

    // keyword에 해당하는 것만 보여준다.
    // keyword를 가지고 와야 한다.
    const keyword = useSelector((state) => state.keyword);

    const filteredList = contactList.filter((item) => {
        return keyword !== '' && item.name === keyword;
    });

    return (
        <div>
            <SearchBox />

            {filteredList.map((item) => (
                <ContactItem item={item} />
            ))}

            {keyword === '' && contactList.map((item) => <ContactItem item={item} key={item.id} />)}
        </div>
    );
};

export default ContactList;

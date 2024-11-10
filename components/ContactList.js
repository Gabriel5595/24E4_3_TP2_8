import { FlatList } from 'react-native';
import ContactItem from './ContactItem';

const contacts = [
    { id: '1', name: 'João Silva', address: 'Rua das Flores, 123', phone: '(11) 98765-4321', avatar: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Maria Souza', address: 'Av. Paulista, 1500', phone: '(11) 91234-5678', avatar: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Carlos Pereira', address: 'Rua das Acácias, 45', phone: '(11) 99876-5432', avatar: 'https://via.placeholder.com/50' },
];

const ContactList = () => {
    return (
        <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ContactItem
                    name={item.name}
                    address={item.address}
                    phone={item.phone}
                    avatar={item.avatar}
                />
            )}
        />
    );
};

export default ContactList;

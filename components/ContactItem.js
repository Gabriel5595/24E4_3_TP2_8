import { View, Text, Image, StyleSheet } from 'react-native';

const ContactItem = ({ name, address, phone, avatar }) => {
    return (
        <View style={styles.contactItem}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.contactDetails}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.phone}>{phone}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contactItem: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    contactDetails: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    address: {
        color: '#666',
    },
    phone: {
        color: '#666',
    },
});

export default ContactItem;

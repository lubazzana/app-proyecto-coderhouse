import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerItemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    itemList: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    deleteButton: {
        backgroundColor: '#04151f',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
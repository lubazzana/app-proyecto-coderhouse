import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
        marginHorizontal: 20,
    },
    containerList: {
        marginHorizontal: 20,
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#fff' ,
        alignItems: 'center',   
    },
    modalTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 40,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 20,
    },
    modalText: {
        fontSize: 18,
        marginHorizontal: 20,
    },
    modalMessage: {
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#04151f',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
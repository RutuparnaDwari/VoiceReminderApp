import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import Tts from 'react-native-tts';

const HomeScreen = ({ navigation }) => {
    const [reminder, setReminder] = useState('');

    const speakReminder = () => {
        if (reminder.trim()) {
            Tts.speak(reminder);
        }
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem('isLoggedIn');
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter a Reminder</Text>
            <TextInput
                style={styles.input}
                value={reminder}
                onChangeText={setReminder}
                placeholder="Type your reminder"
            />
            <Pressable style={styles.speakButton} onPress={speakReminder}>
                <Text style={styles.speakText}>Read Aloud</Text>
            </Pressable>
            <View style={{ marginTop: 20 }}>
                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        marginBottom: 12
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10
    },
    speakButton: {
        backgroundColor: '#025AE0',
        paddingVertical: 10,
        borderRadius: 10
    },
    speakText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500'
    },
    logoutButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        borderRadius: 10
    },
    logoutText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500'
    }
});


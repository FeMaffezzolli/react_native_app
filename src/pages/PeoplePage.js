import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
            people: [],
            loading: true,
            error: false
		};

	};

	componentDidMount() {
        axios
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
            const {results} = response.data;
            this.setState({
                people: results,
                loading: false
            });
        })
        .catch(error => {
            alert('Erro!');
            this.setState({
                loading: false,
                error: true
            });
        });
	};

	render() {
		return (
			<View style={styles.container}>
                { this.state.loading
                    ? <ActivityIndicator size="large" color="#6ca2f7" />
                    : this.state.error
                        ? <Text> Ops, algo deu errado D: </Text>
                        : <PeopleList
                            onPressItem={(page, pageParams) => {
                                this.props.navigation.navigate(page, pageParams)
                            }}
                            people={this.state.people}
                          />
                }
			</View>
		);
	};
};

const styles = StyleSheet.create({
    container: {
        flex          : 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems    : 'center'
    }
});

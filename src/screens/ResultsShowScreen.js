import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'
const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null)
	const id = navigation.getParam('id')
	const getResult = async id => {
		const response = await yelp.get(`/${id}`)
		setResult(response.data)
	}
	useEffect(() => {
		getResult(id)
	}, [])
	if (!result) {
		return null
	}
	return (
		<View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={result.photos}
				keyExtractor={photo => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />
				}}
			/>
			<Text>{result.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 150,
		height: 150,
		marginLeft: 10,
		marginBottom: 10,
		marginTop: 10
	}
})

export default ResultsShowScreen

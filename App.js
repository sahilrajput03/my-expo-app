// @ts-nocheck
import {StyleSheet, Text, View, AppRegistry} from 'react-native'

import {NativeRouter, Route, Link, Routes, Navigate} from 'react-router-native'

const Home = () => <Text style={styles.header}>Home Component</Text>
const About = () => <Text style={styles.header}>About Component</Text>

export default function App() {
	return (
		<NativeRouter>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>

			<View style={styles.container}>
				<Routes>
					<Route path='/' element={<Home />} exact />
					<Route path='/about' element={<About />} />
					{/* <Route path='*' element={<Navigate to='/' replace />} /> */}
				</Routes>
			</View>
		</NativeRouter>
	)
}
const styles = StyleSheet.create({
	container: {
		marginTop: 25,
		padding: 10,
	},
	header: {
		fontSize: 20,
	},
})

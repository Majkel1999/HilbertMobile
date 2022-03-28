import { View, Text } from 'react-native'

type SeparatorProps = {
    text: string
}

export default function Separator(props: SeparatorProps) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
                <Text style={{ width: 50, textAlign: 'center' }}>{props.text}</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
    )
}
import { View, Text, Dimensions } from 'react-native';
import CatIcon from '../../assets/cat.svg';
import AlarmIcon from '../../assets/alarm.svg'

interface CardProps  {
  date: string;
  time: string;
  dono: string;
  medico: string;
  pet: string;
  tag: string;
  backgroundColor: string;
}

export default function Card({ date, time, dono, medico, pet, tag, backgroundColor }: CardProps) {
    const { width, height } = Dimensions.get('window');

  return (
    <View style={{ flexDirection: 'row', backgroundColor: backgroundColor, padding: width * 0.02, borderRadius: 20, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: width * 0.05, marginBottom: height * 0.02 }}>
      
      <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, padding: width * 0.015, alignItems: 'center', marginLeft: width * 0.025, marginRight: width * 0.04 }}>
        <AlarmIcon/>
        <Text style={{ fontWeight: 'bold', fontSize: width * 0.04, marginTop: height * 0.0075, fontFamily: 'Source Code Pro' }}>{date}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: width * 0.04, marginTop: height * 0.0075, fontFamily: 'Source Code Pro' }}>{time}</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: width * 0.04, fontFamily: 'Source Code Pro' }}><Text style={{ fontWeight: 'bold', fontFamily: 'Source Code Pro' }}>{pet}</Text> / {dono}</Text>
        <Text style={{ fontSize: width * 0.04, marginTop: height * 0.01, fontFamily: 'Source Code Pro' }}>Dr. {medico}</Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: width * 0.03 }}>
        <CatIcon width={width * 0.2} height={height * 0.07} style={{marginBottom: height * 0.01, marginTop: height * 0.01}}></CatIcon>
        <View style={{ backgroundColor: '#f0f0f0', paddingHorizontal: width * 0.015, paddingVertical: height * 0.01, marginBottom: height * 0.0025, borderRadius: 6 }}>
          <Text style={{ fontSize: width * 0.03, fontFamily: 'Source Code Pro' }}>{tag}</Text>
        </View>
      </View>
      
    </View>
  );
}
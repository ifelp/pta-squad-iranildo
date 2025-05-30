import { View, Text, Dimensions } from 'react-native';
import { useState } from 'react';
import CatIcon from '../../assets/cat.svg';
import AlarmIcon from '../../assets/alarm.svg'

export default function Card() {
    const { width, height } = Dimensions.get('window');
    const[data,setData] = useState("18/02");
    const[horario, setHorario] = useState("13:00");
    const[nomeDono, setNomeDono] = useState("João Alves");
    const[medico, setMedico] = useState("José Carlos");
    const[pet, setPet] = useState("Luna");

  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#bfb5ff', padding: width * 0.02, borderRadius: 20, alignItems: 'center', justifyContent: 'space-between', margin: width * 0.05 }}>
      
      <View style={{ backgroundColor: '#f0f0f0', borderRadius: 10, padding: width * 0.015, alignItems: 'center', marginLeft: width * 0.025, marginRight: width * 0.04 }}>
        <AlarmIcon/>
        <Text style={{ fontWeight: 'bold', fontSize: width * 0.04, marginTop: height * 0.0075 }}>{data}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: width * 0.04, marginTop: height * 0.0075 }}>{horario}</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: width * 0.04 }}><Text style={{ fontWeight: 'bold' }}>{pet}</Text> / {nomeDono}</Text>
        <Text style={{ fontSize: width * 0.04, marginTop: height * 0.01 }}>Dr. {medico}</Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: width * 0.03 }}>
        <CatIcon width={width * 0.2} height={height * 0.07} style={{marginBottom: height * 0.01, marginTop: height * 0.01}}></CatIcon>
        <View style={{ backgroundColor: '#f0f0f0', paddingHorizontal: width * 0.015, paddingVertical: height * 0.01, marginBottom: height * 0.0025, borderRadius: 6 }}>
          <Text style={{ fontSize: width * 0.03 }}>Primeira Consulta</Text>
        </View>
      </View>
      
    </View>
  );
}
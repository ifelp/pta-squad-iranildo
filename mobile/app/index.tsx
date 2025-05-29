import { View, Text, SafeAreaView, Dimensions } from "react-native";
import Card from "../src/components/Card";
import LogoCiti from "../src/assets/logoCiti.svg"
import Sol from "../src/assets/sol.svg"
import Nuvem from "../src/assets/nuvem.svg"
import Lua from "../src/assets/lua.svg"

const { width } = Dimensions.get("window")


const appointments = [
  { id: 1, date: "18/02", time: "13:00", dono: "João Alves", medico: "Dr. José Carlos", pet: "Luna", tag: "Primeira Consulta", backgroundColor: "#bfb5ff" },
  { id: 2, date: "18/02", time: "13:00", dono: "João Alves", medico: "Dr. José Carlos", pet: "Luna", tag: "Primeira Consulta", backgroundColor: "#bfb5ff" },
  { id: 3, date: "18/02", time: "13:00", dono: "João Alves", medico: "Dr. José Carlos", pet: "Luna", tag: "Primeira Consulta", backgroundColor: "#bfb5ff" }
];

const App: React.FC = () => (
  <SafeAreaView style= {{flex: 1, backgroundColor: "white"}} className="flex-1 bg-white">
    <View className="items-center mt-10">
      <LogoCiti/>
    </View>
    <View className="px-6 mt-8">
      <Text className="text-2xl font-barlowBold text-black ml-6" style={{ fontFamily: "Source Code Pro", fontWeight: "bold" }}>Sua agenda</Text>
      <Text className="text-lg font-barlowBold text-black mt-1 ml-6" style={{ fontFamily: "Source Code Pro", fontSize: 12 }}>
        Veja aqui todos os seus pacientes agendados para hoje.
      </Text>
    </View>
    <View className= "background rounded-lg bg-white px-4 py-4 mt-6 mb-6" style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3, width: 6086 * width / 10000, alignSelf: "center", borderRadius: 32}}>
    <View className="flex-row justify-between mt-4" style={{marginTop: -2}}>
        <Sol/> 
        <Nuvem/>
        <Lua/>
      </View>
    </View>
    <View className="px-2 mt-4">
      {appointments.map((appointment) => (
        <Card
          key={appointment.id}
          date={appointment.date}
          time={appointment.time}
          dono={appointment.dono}
          medico={appointment.medico}
          pet={appointment.pet}
          tag={appointment.tag} 
          backgroundColor={appointment.backgroundColor}
        />
      ))}
    </View>
    <View className="absolute bottom-[-40px] left-0 right-0 h-[75px] rounded-tl-3xl rounded-tr-3xl bg-[#50E678]" />
    </SafeAreaView>
);

export default App;

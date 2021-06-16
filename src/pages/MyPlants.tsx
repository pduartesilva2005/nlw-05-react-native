import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, Alert } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import { loadPlant, PlantProps, removePlant } from "../libs/storage";
import { Load } from "../components/Load";
import { Header } from "../components/Header";
import { PlantCardSecondary } from "../components/PlantCardSecondary";

import waterdrop from "../assets/waterdrop.png";

import { styles } from "../styles/pages/myplants";

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja remover a ${plant.name}`, [
      {
        text: "Não 🙏🏼",
        style: "cancel",
      },
      {
        text: "Sim 🥲",
        onPress: async () => {
          try {
            await removePlant(plant.id),
              setMyPlants((oldData) =>
                oldData.filter((item) => item.id !== plant.id)
              );
          } catch (err) {
            Alert.alert("Não foi possível remover! 🥲");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotLight}>
        <Image source={waterdrop} style={styles.spotLightImage} />
        <Text style={styles.spotLightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas Regadas</Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

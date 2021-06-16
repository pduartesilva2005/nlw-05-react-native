import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../styles/components/header";

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image
        source={{ uri: "https://github.com/pedroduarte2005.png" }}
        style={styles.image}
      />
    </View>
  );
}

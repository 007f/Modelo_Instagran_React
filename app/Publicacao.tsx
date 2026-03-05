import { StyleSheet, Text, View } from "react-native";

export function Publicacao ({titulo, dataPublicacao}) {
    return (
      <View>
        <View style={styles.estruturaTitulo}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.subtitulo}>{dataPublicacao}</Text>
        </View>
        <Text style={styles.corpoTexto}>eu mesmo, porque é um prazer,</Text>
      </View>
    );
};


const styles = StyleSheet.create({
  estruturaTitulo:{

  },
  titulo:{

  },
  subtitulo:{

  },
  corpoTexto:{

  }
})

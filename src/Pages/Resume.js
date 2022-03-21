import React from "react";
import {
  
  Font,
  Document,
  Page,
  Text,
  StyleSheet,
  
} from "@react-pdf/renderer";
const Resume = () => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "Oswald",
    },
    author: {
      fontSize: 12,
      textAlign: "center",
      marginBottom: 3,
    },
    subtitle: {
      fontSize: 18,
      margin: 4,
      fontFamily: "Oswald",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    txt: {
      marginBottom: 145,
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  Font.register({
    family: "Oswald",
    src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  });
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title} fixed>
          Alie Kalokoh
        </Text>

        <Text style={styles.author}>akalokoh9@gmail.com</Text>
        <Text style={styles.author}>
          94A Sanda Street Calaba Town, Freetown
        </Text>
        <Text style={styles.author}>+232 31 565446</Text>
        <Text style={styles.author}>https://alie-kalokoh.web.app</Text>

        <Text style={styles.subtitle}>PROFILE</Text>
        <Text style={styles.text}>
          A computer science student at The University Of The People (first
          year) and also a teacher at Al-Furqan Secondary School and Tusakay
          primary and high school. In 2018, I got a scholarship to study for an
          academic year in the United States. During this time, I learnt new
          skills like communicating with people from different ethnicities,
          helping people, wrestling, and also huddling. In the future, I’m keen
          to pursue a career in hardware networking and Web development.
        </Text>
        <Text style={styles.subtitle}>EDUCATION</Text>

        <Text style={styles.text}>
          <Text style={styles.txt}>
            University Of The People | Colorado, U.S.A (01-28-2021 – present)
            Computer Science 
          </Text>

          <Text style={styles.txt}>
            {" "}
            BlueCrest College | Freetown, SL (03-02-2022 – present) Dip.
            Hardware and Networking
          </Text>

          <Text style={styles.txt}>
            Udemy| San Francisco, U.S.A 08-05-2021 – present HTML, CSS,
            JavaScript and React
          </Text>

          <Text style={styles.txt}>
            Saint Paul’s Secondary School | Pujehun, Sierra Leone 2013 - 2016
            Basic Education Certificate Examination (BECE)
          </Text>
          <Text style={styles.txt}>
            Rising Academy Network 2019 – 2020 West Africa Senior School
            Certificate Examination (WASSCE) 
          </Text>
        </Text>

        <Text style={styles.subtitle}>ACHIEVEMENT</Text>
        <Text style={styles.text}>
        ●	Scholarship to study in the United States for an academic year (2018-2019)
       ●	Conducted a 3-days computer training workshop in Pujehun District

        </Text>
        <Text style={styles.subtitle}>WORK EXPERIENCE</Text>
        <Text style={styles.text}>
        Al- Furqan Secondary School | Freetown, Sierra Leone 
        Tusakay primary and high school | Freetown, Sierra Leone    

        </Text>

        <Text style={styles.subtitle}>HOBBIES AND INTEREST</Text>
        <Text style={styles.text}>
        Computing, teaching, football, wrestling, problem solving.
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default Resume;

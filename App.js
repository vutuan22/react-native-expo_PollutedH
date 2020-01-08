import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, Header } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';


export default function App() {



  const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://uetair.000webhostapp.com/getdata.php");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });


   const allMARKER1 = Array.from(planets);
   var allMARKER =[];
   allMARKER1.forEach(e=>{
    let currentPm25 = parseFloat(e.pm25);
    let info = "Xuân Thuỷ - Cầu Giấy";
    let title = "Trường ĐH Công Nghệ ";
    const p1 = 15.5;
    const p2 = 40.5;
    const p3 = 65.5;
    const p4 = 150.5
    const p5 = 250.5;
    const p6 = 350.5;
    const p7 = 500.5;

    if ( currentPm25 < p1 ){
      //Tot
      let aqiMean = "Tốt";
      let aqi = Math.round((currentPm25-0)*(50/(p1-0))+0) ;
      allMARKER.push({urlImg:"https://pbs.twimg.com/media/EKyfxJNUcAAermW?format=jpg&name=240x240", aqi:aqi, aqiMean: aqiMean, co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: title});
    }
    else if (( currentPm25 >= p1 ) && (currentPm25 < p2)) {
      //Trung Binh
      let aqiMean = "Trung Bình";
      let aqi = Math.round((currentPm25-p1)*(50/(p2-p1))+ 50) ;
      allMARKER.push({urlImg:"https://pbs.twimg.com/media/EKyfy8PU0AAPSX_?format=jpg&name=240x240", aqi:aqi, aqiMean: aqiMean, co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: title});
    }
    else if (( currentPm25 >= p2 ) && (currentPm25 < p3)) {
      //Anh Huong
      let aqiMean = " Ảnh Hưởng Đến Nhóm Nhạy Cảm";
      let aqi = Math.round((currentPm25-p2)*(50/(p3-p2))+ 100) ;
      allMARKER.push({urlImg:"https://pbs.twimg.com/media/EKyfzI-U4AIcfbl?format=jpg&name=240x240", aqi:aqi, aqiMean: aqiMean, co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: title});
    }
    else if (( currentPm25 >= p3 ) && (currentPm25 < p4)) {
      //Xau
      let aqiMean = "Tác động xấu đến sức khoẻ";
      let aqi = Math.round((currentPm25-p3)*(50/(p4-p3))+ 150) ;
      allMARKER.push({urlImg:"https://pbs.twimg.com/media/EKyf0RpUEAUToba?format=jpg&name=240x240", aqi:aqi, aqiMean: aqiMean, co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: title});
    }
    else if (( currentPm25 >= p4 ) && (currentPm25 < p5)) {
      // Rat Xau
      let aqiMean = "Tác động rất xấu đến sức khoẻ ";
      let aqi = Math.round((currentPm25-p4)*(100/(p5-p4))+ 200) ;
      allMARKER.push({urlImg:"https://pbs.twimg.com/media/EKyf0eGU8AEyBo9?format=jpg&name=240x240", aqi:aqi, aqiMean: aqiMean, co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: title});
    }
    else if (( currentPm25 >= p5 ) && (currentPm25 < p6)) {
      // Nguy Hiem
      let aqiMean = "Nguy Hiểm";
      let aqi = Math.round((currentPm25- p5)*(100/(p6-p5))+ 300) ;
      allMARKER.push({urlImg:"https://pbs.twimg.com/media/EKyf0ppVAAIBsbE?format=jpg&name=240x240", aqi:aqi, aqiMean: aqiMean, co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: title});
    }
    else {
      // Rat Nguy Hiem
      let aqiMean = "Rất Nguy Hiểm";
      let aqi = Math.round((currentPm25- p6)*(100/(p7-p6))+ 400) ;
      allMARKER.push({urlImg:"https://pbs.twimg.com/media/EKyf0ppVAAIBsbE?format=jpg&name=240x240", aqi:aqi, aqiMean: aqiMean, co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: title});
    }
     // allMARKER.push({co:e.co, humid:e.humid, region:{latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude)}, id: e.id, info: e.info, pm25: e.pm25, reading_time: e.reading_time, temp: e.temp, title: e.title});
   })



console.log(allMARKER);

     // allMARKER.map(e => ({...e, region:{...e}}));
     //  console.log(allMARKER);





     // const allMARKER = [
     //   {
     //     id: 1,
     //     region: { latitude: 21.038213, longitude: 105.78249 },
     //     title: 'Đại Học Công Nghệ ',
     //     desc: 'Xuân Thuỷ - Cầu Giấy',
     //     urlImg: 'http://vi.wikipedia.org/wiki/Tập_tin:Logo_UET.jpg',
     //     aqi: 62,
     //     pm25: 240,
     //     co: 53,
     //     temp: 25,
     //     humid: 70,
     //   },
     //   {
     //     id: 2,
     //     region: { latitude: 21.026179, longitude: 105.80476 },
     //     title: 'Nhà của tôi',
     //     desc: 'Kim Mã - Ba Đình',
     //     urlImg: 'qwewq',
     //     aqi: 52,
     //     pm25: 230,
     //     co: 43,
     //     temp: 30,
     //     humid: 75,
     //   },
     // ];

  let myMap;
  const [curentPosition, setCurentPosition] = useState(initialState);
  const [marker, setMarker] = useState({});
  const [coords, setCoords] = useState([]);

  // get Marker form database

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { longitude, latitude } = position.coords;
        setCurentPosition({
          ...curentPosition,
          latitude,
          longitude,
        });
      },
      error => alert(error.message),
      { timeout: 20000, maximumAge: 1000 }
    );
    return () => {};
  }, []);


  const renderMarker = () => {
    return allMARKER.map(_marker => (
      <Marker
        key={_marker['id']}
        coordinate={_marker['region']}
        title={_marker['title']}
        description={_marker['info']}
        onPress={() => {
          setMarker(_marker);
        }}
      />
    ));
  };

  const renderDetailMarker = () => (
    <View style={styles.container}>
      <Image
        source={{ uri: marker['urlImg'] }}
        resizeMode="cover"
        style={{ width: 80, height: 80 }}
      />
      <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign:'center' }}>{marker['title']}</Text>
        <Text allowFontScaling={false} style={{ fontSize: 12, textAlign:'center' }}> Vị trí: lat: {marker['region']['latitude']}, lng:{marker['region']['longitude']}</Text>
        <Text allowFontScaling={false} style={{ fontSize: 15, textAlign:'center' }} >Chỉ số AQI : {marker['aqi']} </Text>
        <Text allowFontScaling={false} style={{ fontSize: 15, textAlign:'center' }}> {marker['aqiMean']} </Text>
        <Text allowFontScaling={false} style={{ fontSize: 12, textAlign:'center' }}> Dữ liệu cập nhập lúc: {marker['reading_time']} </Text>
        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row' }}>
          <Text> </Text>
          <View style = {styles.box1}>
            <Text style = {styles.text}>
              PM2.5: <Text>{marker['pm25']}</Text> µg/m3{' '}
            </Text>
          </View>
          <View style = {styles.box3}>
            <Text style = {styles.text}>
              Nhiệt độ: <Text>{marker['temp']}</Text> °C{' '}
            </Text>
          </View>
          <View style = {styles.box4}>
            <Text style = {styles.text}>
              Độ ẩm: <Text>{marker['humid']}</Text> %{' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return curentPosition.latitude ? (
    <View style={{ flex: 1 }}>

      <MapView
        ref={ref => (myMap = ref)}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={curentPosition}>
        {renderMarker()}
        <Polyline strokeWidth={2} strokeColor="red" coordinates={coords} />
      </MapView>
      {marker.hasOwnProperty('id') && renderDetailMarker()}
    </View>
  ) : (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  );
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    left: '2.5%',
    alignItems: 'center',
    padding: 10,
    width: '95%',
    height: 200,
    flexDirection: 'row',
    backgroundColor: '#fff3e0',
    borderRadius: 35,
    shadowColor: '#000000',
    shadowOpacity : 1,
    shadowRadius: 15,
  },
  box1: {
    top: '26%',
    alignItems: 'center',
    flex: 1 ,
    flexDirection: 'row',
    height: '65%',
    width : '25%',
    backgroundColor: '#aed581',
    borderRadius: 8,
  },
  box2: {
    top: '26%',
    alignItems: 'center',
    flex: 1 ,
    flexDirection: 'row',
    height: '65%',
    width : '25%',
    backgroundColor: '#ffd54f',
    borderRadius: 8,
  },
  box3: {
    top: '26%',
    alignItems: 'center',
    flex: 1 ,
    flexDirection: 'row',
    height: '65%',
    width : '25%',
    backgroundColor: '#64b5f6',
    borderRadius: 8,
  },
  box4: {
    top: '26%',
    alignItems: 'center',
    flex: 1 ,
    flexDirection: 'row',
    height: '65%',
    width : '25%',
    backgroundColor: '#9575cd',
    borderRadius: 8,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

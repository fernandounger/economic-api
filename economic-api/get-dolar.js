import dayjs from "dayjs";

export const  getDolar = async (dataFinal) => {
  try {
    const response = await fetch(
      `https://economia.awesomeapi.com.br/USD-BRL/10?start_date=20200201&end_date=${dayjs(dataFinal).format('YYYYMMDD')}`
    );
    const data = await response.json()
    console.log(data)
    
    return data
  } catch (error) {
    console.log(error)
  }
};

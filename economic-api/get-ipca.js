import dayjs from "dayjs";

export async function getIpca(dataFinal) {
  try {
    const response = await fetch(
      `https://api.bcb.gov.br/dados/serie/bcdata.sgs.10844/dados?formato=json&dataFinal=${dayjs(dataFinal).format('YYYY-MM-DD')}`
    );
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

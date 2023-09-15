import React, { Component, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Rank.css';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';

const Rank = () => {

    const provinces = [
        "Aceh",
        "Bali",
        "Banten",
        "Bengkulu",
        "Yogyakarta",
        "DKI Jakarta",
        "Gorontalo",
        "Jambi",
        "Jawa Barat",
        "Jawa Tengah",
        "Jawa Timur",
        "Kalimantan Barat",
        "Kalimantan Selatan",
        "Kalimantan Tengah",
        "Kalimantan Timur",
        "Kalimantan Utara",
        "Kepulauan Bangka Belitung",
        "Kepulauan Riau",
        "Lampung",
        "Maluku",
        "Maluku Utara",
        "Suntalangu Aik Ampat", // "Nusa Tenggara Barat",
        "Nusa Tenggara Timur",
        "Papua",
        "Papua Barat",
        "Riau",
        "Sulawesi Barat",
        "Sulawesi Selatan",
        "Sulawesi Tengah",
        "Sulawesi Tenggara",
        "Sulawesi Utara",
        "Sumatera Barat",
        "Sumatera Selatan",
        "Sumatera Utara"
    ]

    const lostData = {
        "Jawa Barat": {
            "lat": -7.090943690869484,
            "lon": 107.65432825625165
        },
        "Jawa Timur": {
            "lat": -7.519707844716613,
            "lon": 112.23060085213052
        },
        "Kalimantan Barat": {
            "lat": -0.24759765518776253,
            "lon": 111.4583680883017
        },
        "Kalimantan Selatan": {
            "lat": -3.0565482301955478,
            "lon": 115.22463108172295
        },
        "Kalimantan Tengah": {
            "lat": -1.691452118920647,
            "lon": 113.33881803503134
        },
        "Kalimantan Timur": {
            "lat": 0.658768884100717,
            "lon": 116.39339629681855
        },
        "Kalimantan Utara": {
            "lat": 3.1741976872267235,
            "lon": 116.01804176032579
        },
        "Kepulauan Bangka Belitung": {
            "lat": - 2.710351197912023,
            "lon": 106.54318793686112
        },
        "Kepulauan Riau": {
            "lat": 3.963683751070041,
            "lon": 108.36658592438053
        },
        "Maluku Utara": {
            "lat": 1.5980541277278366,
            "lon": 127.84910409436732
        },
        "Nusa Tenggara Timur": {
            "lat": - 8.629005979542505,
            "lon": 121.35140477769164
        },
        "Papua Barat": {
            "lat": - 1.314990515347291,
            "lon": 132.9004762594661
        },
        "Sulawesi Barat": {
            "lat": - 2.8242678705851216,
            "lon": 119.2784289899092
        },
        "Sulawesi Selatan": { // error
            "lat": -3.671598581546303,
            "lon": 120.13779073213493
        },
        "Sulawesi Tengah": {
            "lat": - 1.3183091121399968,
            "lon": 121.50238428083075
        },
        "Sulawesi Tenggara": {
            "lat": - 4.072480688527799,
            "lon": 122.25068959750469
        },
        "Sulawesi Utara": {
            "lat": 0.6199436625784723,
            "lon": 123.6253651363006
        },
        "Sumatera Barat": {
            "lat": -0.6979302581188596,
            "lon": 100.89937458233075
        },
        "Sumatera Selatan": {
            "lat": - 3.2800121264289275,
            "lon": 103.94062128804117
        },
        "Sumatera Utara": {
            "lat": 2.1587452624016565,
            "lon": 99.39611243263363
        }
    }

    const [value, setValue] = useState([])
    const apiKey = 'f5bfff9bc51bf14b5809237dba5b42cf'
    let obj = {}

    const getCountry = async () => {
        try {
            let array = []
            const promises = provinces.map(async (province, idx) => {
                const getCountryLoc = await axios.get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${province}&appid=${apiKey}`
                );
                if (getCountryLoc.data[0] != undefined) {
                    const countryLocX = getCountryLoc.data[0]["lat"];
                    const countryLocY = getCountryLoc.data[0]["lon"];
                    const getAirQuality = await axios.get(
                        `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${countryLocX}&lon=${countryLocY}&appid=${apiKey}`
                    );
                    // obj[getCountryLoc.data[0]["name"]] = getAirQuality.data["list"][0]["main"]["aqi"]
                    // obj["name"] = getCountryLoc.data[0]["name"]
                    // obj["iqa"] = getAirQuality.data["list"][0]["main"]["aqi"]
                    obj = { ...{}, name: getCountryLoc.data[0]["name"], iqa: getAirQuality.data["list"][0]["main"]["aqi"] };
                }
                else {
                    const countryLocName = province
                    const countryLocX = lostData[countryLocName]["lat"]
                    const countryLocY = lostData[countryLocName]["lon"]
                    const getAirQuality = await axios.get(
                        `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${countryLocX}&lon=${countryLocY}&appid=${apiKey}`
                    );
                    obj[countryLocName] = getAirQuality.data["list"][0]["main"]["aqi"]
                }
                array.push(obj)
            });
            await Promise.all(promises);
            array.sort((a, b) => b.iqa - a.iqa);

            // const uniq = [...new Set (array.map (JSON.stringify))].map (JSON.parse);
            setValue(array)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getCountry()
    }, [])

    const getBadge = (iqa) => {
        if (iqa >= 4) {
            return 'danger'
        }
        else if (iqa == 3) {
            return 'warning'
        }
        else {
            return 'success'
        }
    }

    const getStatus = (iqa) => {
        if (iqa === 1) return `Good`
        else if (iqa === 2) return 'Fair'
        else if (iqa === 3) return `Moderate`
        else if (iqa === 4) return 'Poor'
        else return 'Very Poor'
    }


    let num = 1

    return (
        <>
            <div className='container' >
                <section className="rank p-4 rounded">
                    <div className="title mb-4 text-light text-center">
                        <h3>Rank Kualitas Udara di Indonesia</h3>
                    </div>
                    <Table>
                        <tr>
                            <Table striped bordered hover className='w-100 text-center' style={{ marginBottom : '-0.5px'  }}>
                                <thead className='text-center table-success'>
                                    <th style={{ width : '10%' }}>No.</th>
                                    <th style={{ width : '30%' }}>Nama Kota</th>
                                    <th style={{ width : '30%' }}>Kualitas Udara</th>
                                    <th style={{ width : '30%' }}>Status</th>
                                </thead>
                            </Table>
                        {/* </tr>
                        <tr> */}
                            <div style={{ maxHeight: '500px', overflow: 'auto' }}>
                                <Table striped bordered hover className='w-100 text-center bg-white'>
                                    {/* <tbody> */}
                                    {
                                        value.map((value, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td style={{ width : '10%' }}>{num++}</td>
                                                    <td style={{ width : '30%' }}>{value.name}</td>
                                                    <td style={{ width : '30%' }}>{value.iqa}</td>
                                                    <td style={{ width : '30%' }}><Badge bg={getBadge(value.iqa)}>{getStatus(value.iqa)}</Badge></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    {/* </tbody> */}
                                </Table>
                            </div>
                        </tr>
                    </Table>
                </section>
            </div >
        </>

    )
}

export default Rank
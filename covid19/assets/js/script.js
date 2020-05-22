const API_URL           = "https://corona-api.com/countries/ID"

const LAST_UPDATE       = $("#last-update")

const POSITIVE          = $("#positive")
const MEDICAL           = $("#medical")
const RECOVERY          = $("#recovery")
const DEATH             = $("#death")

const TOTAL_CASES       = $("#total-cases")[0].getContext("2d")
const CASES_PER_DAY     = $("#cases-per-day")[0].getContext("2d")
const PERCENTAGE        = $("#percentage")[0].getContext("2d")

let addData             = (chart, label, data) => {
    if (label) chart.data.labels.push(label)
    chart.data.datasets.forEach((dataset, index) => {
        Array.isArray(data[index]) ? dataset.data = data[index] : dataset.data.push(data[index])
    })
    chart.update()
}

let changeDateFormat    = date => {
    const MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    return date
        .split(/[^0-9]/)
        .map((value, index) => {
            return index === 1 ? MONTHS[value -1] : value
        })
        .reverse()
        .join(" ")
}

const CHART_TOTAL_CASES     = new Chart(TOTAL_CASES, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Positif",
            data: [],
            backgroundColor: "rgba(110, 110, 110, 0.2)",
            borderColor: "rgba(66, 147, 245, 0.8)"
        },
        {
            label: "Sembuh",
            data:[],
            backgroundColor: "rgba(110, 110, 110, 0.2)",
            borderColor: "rgba(66, 245, 111, 0.8)"
        },
        {
            label:"Meninggal",
            data: [],
            backgroundColor: "rgba(110, 110, 110, 0.2)",
            borderColor: "rgba(245, 84, 66, 0.8)"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

const CHART_CASES_PER_DAY   = new Chart(CASES_PER_DAY, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Positif",
            data: [],
            backgroundColor: "rgba(110, 110, 110, 0.2)",
            borderColor: "rgba(66, 147, 245, 0.8)"
        },
        {
            label: "Sembuh",
            data:[],
            backgroundColor: "rgba(110, 110, 110, 0.2)",
            borderColor: "rgba(66, 245, 111, 0.8)"
        },
        {
            label:"Meninggal",
            data: [],
            backgroundColor: "rgba(110, 110, 110, 0.2)",
            borderColor: "rgba(245, 84, 66, 0.8)"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

const CHART_PERCENTAGE      = new Chart(PERCENTAGE, {
    type: "pie",
    data: {
        labels: ["Dirawat (%)", "Sembuh (%)", "Meninggal (%)"],
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: [
                'rgba(255, 193, 7, 0.8)',
                'rgba(66, 245, 111, 0.8)',
                'rgba(245, 84, 66, 0.8)'
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

$(() => {

    fetch(API_URL)
        .then(response => {
            return response.status !== 200 ? Promise.reject(new Error(response.status)) : Promise.resolve(response)
        })
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
            const LATEST        = response.data.latest_data

            LAST_UPDATE.text(changeDateFormat(response.data.updated_at.match(/(\d{4})-(\d{2})-(\d{2})/g)[0]))
            POSITIVE.text(LATEST.confirmed)
            MEDICAL.text(LATEST.confirmed - (LATEST.recovered + LATEST.deaths))
            RECOVERY.text(LATEST.recovered)
            DEATH.text(LATEST.deaths)

            response.data.timeline.reverse().forEach(data => {
                const DATE = changeDateFormat(data.date)

                addData(CHART_TOTAL_CASES, DATE, {
                    0: data.confirmed,
                    1: data.recovered,
                    2: data.deaths
                })

                addData(CHART_CASES_PER_DAY, DATE, {
                    0: data.new_confirmed,
                    1: data.new_recovered,
                    2: data.new_deaths
                })
            })

            const death_rate    = LATEST.calculated.death_rate
            const recovery_rate = LATEST.calculated.recovery_rate
            const medical_rate  = 100 - (recovery_rate + death_rate)

            addData(CHART_PERCENTAGE, null, {
                0: [medical_rate, recovery_rate, death_rate]
            })

            $("#splash-screen").removeClass("d-flex").addClass("d-none")
        })
        .catch(error => {
            console.error(error)
        })

})
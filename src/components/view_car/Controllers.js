/** This class handles calculate car price and validate the rent dates **/

export default class Controller {

    constructor(carPrice) {
        this.carPrice = carPrice;
    }
    changeFrom(e, from, to, setError, setFrom, setTo, setPrice) {

        this.fromDate = (e.target.value)

        if (this.getDatesDiff(new Date(), this.fromDate) < 0) {
            setError("The date can't be in the past!")
            setFrom(null)
            setTo(null)
            setPrice(0)
            return
        }

        if ((this.fromDate && this.toDate) || (from && to)) {
            this.calculatePrice(setError, setFrom, setTo, setPrice, from, to)
        }
    }

    changeTo(e, from, to, setError, setFrom, setTo, setPrice) {

        this.toDate = (e.target.value)
        if (this.getDatesDiff(new Date(), this.toDate) < 0) {
            setError("The date can't be in the past!")
            setFrom(null)
            setTo(null)
            setPrice(0)
            return
        }
        if ((this.fromDate && this.toDate) || (from && to))
            this.calculatePrice(setError, setFrom, setTo, setPrice, from, to)

    }

    getDatesDiff(from, to) {
        return Math.floor((Date.parse(to) - Date.parse(from)) / 86400000)
    }

    calculatePrice(setError, setFrom, setTo, setPrice, from, to) {

        if (this.fromDate === undefined || this.fromDate === null) this.fromDate = from
        if (this.toDate === undefined || this.toDate === null) this.toDate = to

        this.days = this.getDatesDiff(this.fromDate, this.toDate)

        if (this.days <= 1) {  //  if selected days incorrect
            setError('Please fill the dates correctly')
            setFrom(null)
            setTo(null)
            return
        } else {
            setPrice(this.carPrice * this.days)
            console.log(this.carPrice * this.days)
            setTo(this.toDate)
            setFrom(this.fromDate)

        }

        setError('')

    }

}



const express = require('express')
const router = express.Router()
const Course = require('../models/course')
const app = express()
const path = require('path')
app.use("/pub", express.static(path.join(__dirname, 'pub')));

//Hämta alla kurser
router.get('/', async(req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Hämta en kurs
router.get('/:id', getCourse, (req, res) => {
    res.json(res.course)


})

//Lägg till en kurs
router.post('/', async(req, res) => {
        const course = new Course({
            courseId: req.body.courseId,
            courseName: req.body.courseName,
            coursePeriod: req.body.coursePeriod
        })
        try {
            const newcourse = await course.save()
            res.status(201).json(newcourse)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    })
    //Radera en kurs
router.delete('/:id', getCourse, async(req, res) => {
    try {
        await res.course.remove()
        res.json({ message: 'Kurs raderad' })
    } catch (err) {
        res.status(500).json({ message: err.message })

    }

})
async function getCourse(req, res, next) {
    let course
    try {
        course = await Course.findById(req.params.id)
        if (course == null) {
            return res.status(404).json({ message: 'Hittar ej kursen!' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.course = course
    next()
}

module.exports = router
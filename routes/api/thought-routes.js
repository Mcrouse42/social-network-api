const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts);

router.route('/:userId')
    .post(addThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

module.exports = router;
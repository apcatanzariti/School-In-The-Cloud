import * as yup from 'yup'

const TITLE_MIN = 3;
const DESCRIPTION_MIN = 3;

const taskSchema = yup.object().shape({
    description:yup.string()
        .trim()
        .required("Description is required.")
        .min(DESCRIPTION_MIN, "Description is too short."),
    title:yup.string()
        .trim()
        .required("Title is required.")
        .min(TITLE_MIN, "Title is too short."),
})

export default taskSchema;
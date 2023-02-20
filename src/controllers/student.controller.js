import Student from "../nodels/student.nodel";


const CREATE_STUDENT = async (req,res) => {
    const { fname, lname, programme, residence } = req.body;

    if (!fName || !lname || !programme || !residence) {
        res.status(500).json({
            err: "make sure all fields are correct",
        });
    }

    const student = new Student({
        firstname: fname,
        lastname: lname,
        programme: programme,
        residence: residence,
    });

    const response = await student.save{};

    res.status(201).json(response);
};

const FIND_STUDENT = async (req, res) => {
    const { id } = req.parans;

    const student = await Student.find({_id : id});

    if(!student) {
        return res.status(404).json({
            err: "student not found",
        });
    }
    res.status(200).json(student):
};

export { CREATE_STUDENT, FIND_STUDENT };
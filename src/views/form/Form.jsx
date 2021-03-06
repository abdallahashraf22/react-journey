import {Form, Button} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import Select from "react-select";
import './Form.css'
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

function Login() {
    const schema = yup.object({
        FirstName: yup.string().required("First name required"),
        LastName: yup.string().required("Last name required"),
        Phone: yup.number().typeError("Must be a number").required("Phone required"),
        Email: yup.string().email("Invalid email").required("Email required"),
        Password: yup.string().required("Password required"),
        Gender: yup.string().required("Gender required"),
        Colors: yup.array().min(1, "Pick at least 1 color").of(yup.object().shape({
            label: yup.string().required(),
            value: yup.string().required()
        }))
    })

    const {register, handleSubmit, formState: {errors}, control} = useForm({
        defaultValues: {
            FirstName: "", LastName: "", Email: "", Phone: "", Password: "", Gender: "", Colors: [],

        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className=" container text-center text-dark " style={{height: 50, marginTop: -30}}>
            <div className="row">
                <div className="col-5  m-auto">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-1" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="FirstName"
                                {...register("FirstName", {required: true})}
                            />
                            <Form.Text className="text-danger">
                                <p>{errors.FirstName?.message}</p>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                name="LastName"
                                {...register("LastName", {required: true})}
                            />
                            <Form.Text className="text-danger">
                                <p>{errors.LastName?.message}</p>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="Email"
                                {...register("Email", {required: true})}
                            />
                            <Form.Text className="text-danger">
                                <p>{errors.Email?.message}</p>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="Password"
                                {...register("Password", {required: true})}
                            />
                            <Form.Text className="text-danger">
                                <p>{errors.Password?.message}</p>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="Phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone"
                                name="Phone"
                                {...register("Phone", {required: true})}
                            />
                            <Form.Text className="text-danger">
                                <p> {errors.Phone?.message}</p>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label className="me-2">Gender: </Form.Label>
                            <Form.Check
                                inline
                                label="male"
                                name="Gender"
                                value="male"
                                type="radio"
                                {...register("Gender", {required: true})}
                            />
                            <Form.Check
                                inline
                                label="female"
                                name="Gender"
                                value="female"
                                type="radio"
                                {...register("Gender")}
                            />
                            <Form.Text className="text-danger">
                                <p> {errors.Gender?.message}</p>
                            </Form.Text>
                        </Form.Group>

                        <Controller
                            name="Colors"
                            control={control}
                            rules={{required: true}}
                            defaultValue="Swimming"
                            render={({field}) => (
                                <Select
                                    isMulti
                                    {...field}
                                    options={[
                                        {value: "Blue", label: "Blue"},
                                        {value: "Red", label: "Red"},
                                        {value: "Black", label: "Black"}
                                    ]}
                                />
                            )}

                        />
                        <Form.Text className="text-danger">
                            <p> {errors.Colors?.message}</p>
                        </Form.Text>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;

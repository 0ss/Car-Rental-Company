export const SiteLocations = {
    signUp: "/signup",
    login: "/login",
    searchCars: "/searchCars",
    adminAddCar: "/admin/addCar",
    adminAllOrders: "/admin/allOrders",
    viewReservation: "/viewReservation",
    myOrders: "/myOrders",
    restPassword: "/resetPassword",
    viewCar: "/viewCar",
    home: "/"
};

export const DateInput = ({ type, placeholder, ...props }) => (
    <input
        type={type}
        spellCheck="false"
        autoComplete="false"
        placeholder={placeholder}
        defaultValue={placeholder}
        onChange={props.Onchange}
        {...props}
    />
);
export const apiBaseUrl = "https://car-rental-com.herokuapp.com";

export const SiteLocations = {
    signUp: "/signup",
    login: "/login",
    searchCars: "/SearchCars",
    adminAddCar: "/admin/AddCar",
    adminAllOrders: "/admin/AllOrders",
    viewReservation: "/ViewReservation",
    myOrders: "/MyOrders",
    restPassword: "/ResetPassword",
    viewCar: "/ViewCar",
    home: "/",
    termsConditions: "/privacy/TermsConditions",
    privacyPolicy: "/privacy/PrivacyPolicy"
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
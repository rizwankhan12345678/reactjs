function ErrorMassage(props) {
    const { errorMassage } = props;
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {errorMassage}
        </div>
    );
};

export default ErrorMassage;
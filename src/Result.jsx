export default function Result({ correct, total }) {
    return (
        <div className="card shadow-sm text-center mt-4">
            <div className="card-body">
                <h2 className="card-title text-success">Quiz Completed!</h2>
                <p className="card-text fs-4">
                    You answered <strong>{correct}</strong> out of <strong>{total}</strong> questions correctly.
                </p>
                <p className="text-muted">Great job!</p>
                <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>
                    Restart Quiz
                </button>
            </div>
        </div>
    );
}

function SignalPath({ path }) {
    const { brand, model, effect } = path

    return (
        <div className="signal-text">
            {brand} {model} {effect}
        </div>
    )
}

export default SignalPath;
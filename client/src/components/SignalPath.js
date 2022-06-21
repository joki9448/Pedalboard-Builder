function SignalPath({ path }) {
    console.log('path: ', path)
    const { brand, model, effect } = path
    return (
        <div className="signal-text">
            {brand} {model} {effect}
        </div>
    )
}

export default SignalPath;
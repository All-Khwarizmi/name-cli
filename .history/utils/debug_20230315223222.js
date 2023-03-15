module.exports = () => {
    alerts({ type: 'warning', msg: `DEBUGGING INFO` });
    console.log('Cli.input', cli.input);
    console.log('Cli.flags', cli.flags);
}
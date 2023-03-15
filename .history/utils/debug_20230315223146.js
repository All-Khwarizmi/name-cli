module.exports = () => {
    alerts({ type: 'info', msg: `CLI DATA` });
    console.log('Cli.input', cli.input);
    console.log('Cli.flags', cli.flags);
}
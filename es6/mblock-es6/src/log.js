export default (provider) => (system) => (message) => provider(`${system} ${message}`)

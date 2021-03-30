export const getLaunches = async (args, context) => {
    return context.entities.Launch.findMany({})
}
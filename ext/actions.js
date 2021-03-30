export const createLaunch = async (args, context) => {
    return context.entities.Launch.create({
        data: {
            name: args.name,
            payloadWeight: args.payloadWeight,
        }
    })
}

export const deleteLaunch = async (args, context) => {
    return context.entities.Launch.delete({
        where: {id: args.launchId}
    })
}
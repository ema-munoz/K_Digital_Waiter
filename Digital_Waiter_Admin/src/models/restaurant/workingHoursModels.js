const workingHours = (sequelize, type) => {
    return sequelize.define('workingHours', {
        idWorkingHours: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        scheduleWorkingHours: type.STRING,
        dateWorkingHours: type.STRING,
        startTimeWorkingHours: type.STRING,
        finishTimeWorkingHours: type.STRING,
        creationWorkingHours: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateWorkingHours: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP "),
            allowNull: false,
        },
    },
        {
            timestamps: false,
        }
    );
};

module.exports = workingHours;
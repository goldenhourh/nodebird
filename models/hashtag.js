// 예시: hashtag.js 파일에 initiate 메서드 추가
const { DataTypes, Model } = require('sequelize');

class Hashtag extends Model {
  static initiate(sequelize) {
    Hashtag.init(
      {
        title: {
          type: DataTypes.STRING(15),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Hashtag',
        tableName: 'hashtags',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }

  static associate(db) {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  }
}

module.exports = Hashtag;

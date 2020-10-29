const { MessageEmbed } = require("discord.js");
const ayar = require("../settings.json");
module.exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor("RANDOM");
    let olumlu = new MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor("GREEN");
    let olumsuz = new MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor("RED");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed.setDescription('Bu komutu kullanmak için gerekli izinlere sahip değilsin.')).then(x => x.delete({timeout: 10000}));
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    let aether = args[0];
    if (!aether || !member || aether !== "vip" || aether !== "muzisyen" || aether !== "vokal" || aether !== "terapist" || aether !== "soruncözücü" || aether !== "lovers" || aether !== "bilgi") return message.channel.send(olumsuz.setDescription(`Komutu doğru kullanmalısın. \`Örnek: ${ayar.prefix || ""}rol vip @üye\``).setFooter(`.rol bilgi | kullanarak bilgi alabilirsiniz.`)).then(x => x.delete({timeout: 12000}));

    if (aether === "bilgi" || aether === "info") {
        message.channel.send(embed.setDescription(`
        ${ayar.prefix || ""}rol vip @üye \`>\` Belirtilen üyeye **VIP** rolü verir/alır.
        ${ayar.prefix || ""}rol muzisyen @üye \`>\` Belirtilen üyeye **Müzisyen** rolü verir/alır.
        ${ayar.prefix || ""}rol vokal @üye \`>\` Belirtilen üyeye **Vokal** rolü verir/alır.
        ${ayar.prefix || ""}rol terapist @üye \`>\` Belirtilen üyeye **Terapist** rolü verir/alır.
        ${ayar.prefix || ""}rol soruncözücü @üye \`>\` Belirtilen üyeye **Sorun Çözücü** rolü verir/alır.
        ${ayar.preefix || ""}rol lovers @üye \`>\` Belirtilen üyeye **Lovers** rolü verir/alır.
         `))
        return;
    }

    if (aether === "vip") {
        let vipRol = message.guild.roles.cache.get(ayar.vipRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (vipRol && !member.roles.cache.has(vipRol)) {
             member.roles.add(vipRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${vipRol} rolü verdim.`))
             message.react("✅");
         } else if (vipRol && member.roles.cache.has(vipRol)) {
            member.roles.remove(vipRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${vipRol} rolünü aldım.`))
            message.react("✅")
         } else if (!vipRol) {
             message.channel.send(olumsuz.setDescription(`VIP rolü bulunamadı.`))
             message.react("❎")
         }
    }

    if (aether === "muzisyen") {
        let muzisyenRol = message.guild.roles.cache.get(ayar.muzisyenRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (muzisyenRol && !member.roles.cache.has(muzisyenRol)) {
             member.roles.add(muzisyenRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${muzisyenRol} rolü verdim.`))
             message.react("✅");
         } else if (muzisyenRol && member.roles.cache.has(muzisyenRol)) {
            member.roles.remove(muzisyenRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${muzisyenRol} rolünü aldım.`))
            message.react("✅")
         } else if (!muzisyenRol) {
             message.channel.send(olumsuz.setDescription(`Müzisyen rolü bulunamadı.`))
             message.react("❎")
         }
    }

    if (aether === "vokal") {
        let vokalRol = message.guild.roles.cache.get(ayar.vokalRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (vokalRol && !member.roles.cache.has(vokalRol)) {
             member.roles.add(vokalRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${vokalRol} rolü verdim.`))
             message.react("✅");
         } else if (vokalRol && member.roles.cache.has(vokalRol)) {
            member.roles.remove(vokalRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${vokalRol} rolünü aldım.`))
            message.react("✅")
         } else if (!vokalRol) {
             message.channel.send(olumsuz.setDescription(`Vokal rolü bulunamadı.`))
             message.react("❎")
         }
    }

    if (aether === "Terapist") {
        let terapistRol = message.guild.roles.cache.get(ayar.terapistRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (terapistRol && !member.roles.cache.has(terapistRol)) {
             member.roles.add(terapistRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${terapistRol} rolü verdim.`))
             message.react("✅");
         } else if (terapistRol && member.roles.cache.has(terapistRol)) {
            member.roles.remove(terapistRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${terapistRol} rolünü aldım.`))
            message.react("✅")
         } else if (!terapistRol) {
             message.channel.send(olumsuz.setDescription(`Terapist rolü bulunamadı.`))
             message.react("❎")
         }
    }

    if (aether === "soruncözücü") {
        let sorunCözücüRol = message.guild.roles.cache.get(ayar.sorunCözücüRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (sorunCözücüRol && !member.roles.cache.has(sorunCözücüRol)) {
             member.roles.add(sorunCözücüRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${sorunCözücüRol} rolü verdim.`))
             message.react("✅");
         } else if (sorunCözücüRol && member.roles.cache.has(sorunCözücüRol)) {
            member.roles.remove(sorunCözücüRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${sorunCözücüRol} rolünü aldım.`))
            message.react("✅")
         } else if (!sorunCözücüRol) {
             message.channel.send(olumsuz.setDescription(`Sorun Çözücü rolü bulunamadı.`))
             message.react("❎")
         }
    }

    if (aether === "lovers") {
        let loversRol = message.guild.roles.cache.get(ayar.loversRol);
        if (!member.manageable) return message.channel.send(olumsuz.setDescription(`Bu üye üzerinde işlem gerçekleştiremiyorum.`)).then(x => x.delete({timeout: 10000}));
         if (loversRol && !member.roles.cache.has(loversRol)) {
             member.roles.add(loversRol)
             message.channel.send(olumlu.setDescription(`${member} adlı üyeye başarılı bir şekilde ${loversRol} rolü verdim.`))
             message.react("✅");
         } else if (loversRol && member.roles.cache.has(loversRol)) {
            member.roles.remove(loversRol)
            message.channel.send(olumlu.setDescription(`${member} adlı üyeden başarılı bir şekilde ${loversRol} rolünü aldım.`))
            message.react("✅")
         } else if (!loversRol) {
             message.channel.send(olumsuz.setDescription(`Lovers rolü bulunamadı.`))
             message.react("❎")
         }
    }

};

module.exports.configuration = {
    name: "rol",
    aliases: ["rol", "r"],
    usage: "r @üye vip/muzisyen/vokal/terapist/soruncözücü/lovers",
    description: "Belirtilen üyeye belirttiğiniz rolleri verirsiniz."
};
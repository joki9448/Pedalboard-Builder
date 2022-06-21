### PEDALS ###

puts 'Creating seeds...'

puts 'Creating users...'
u1 = User.create(username: "John", password_digest: "123")
puts 'Creating configs...'
c1 = Config.create!(user_id: u1.id)

# TC Electronic #

puts 'Creating pedals...'
Pedal.create!(brand: "TC Electronic", model: "Cinders", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "El Cambo", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Eyemaster", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Grand Magus", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Dark Matter", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "MojoMojo", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Rush Booster", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Spark Booster", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Spark Mini", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Spectra", effect: "Distortion / Gain", config_id: c1.id)

Pedal.create(brand: "TC Electronic", model: "Ditto", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Ditto X4", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Dreamscape", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Drip", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "EchoBrain", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Flashback", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Flashback X4", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Hall of Fame", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Hall of Fame X4", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Nova Delay", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Prophet", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "SkySurfer", effect: "Reverb / Delay", config_id: c1.id)

Pedal.create(brand: "TC Electronic", model: "AfterGlow", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Brainwaves", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Corona", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Helix Phaser", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Mimiq Mini", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Nether", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Nova System", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Pipeline", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Shaker Mini", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Third Dimension", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Viscious Vibe", effect: "Modulation", config_id: c1.id)

Pedal.create(brand: "TC Electronic", model: "Crescendo", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Forcefield", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Hyper Gravity", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Infinite Sustainer", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Iron Curtain", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "TC Electronic", model: "Sentry", effect: "Compression / EQ", config_id: c1.id)

# EXPRESSION #

Pedal.create(brand: "Dunlop", model: "CryBaby", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "CryBaby 2", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "CSTBA CryBaby", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "DimeBag Wah", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "EVH CryBaby", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "Hendrix CryBaby", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "Slash CryBaby", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "Volume", effect: "Expression", config_id: c1.id)
Pedal.create(brand: "Dunlop", model: "Volume X8", effect: "Expression", config_id: c1.id)

# MXR #

Pedal.create(brand: "MXR", model: "Dyna Comp", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Super Comp", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Studio Compressor", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Noise Clamp", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Smart Gate", effect: "Compression / EQ", config_id: c1.id)

Pedal.create(brand: "MXR", model: "Carbon Copy", effect: "Reverb / Delay", config_id: c1.id)

Pedal.create(brand: "MXR", model: "Analog Chorus", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "MXR", model: "EVH Flanger", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Phase 90", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Phase 100", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Stereo Chorus", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Uni-Vibe", effect: "Modulation", config_id: c1.id)

Pedal.create(brand: "MXR", model: "Blue Box", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Booster Mini", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Distortion +", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Distortion III", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Fullbore Metal", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "GT-OD", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Micro Amp", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Octavio", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Power 50", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Raw Dawg", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Octave Fuzz", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Sub Machine", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Sugar Drive", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Super Badass", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "MXR", model: "Timmy", effect: "Distortion / Gain", config_id: c1.id)

# BOSS #

Pedal.create(brand: "Boss", model: "Compressor CP-1X", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Equalizer GE-7", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Noise Suppressor NS-2", effect: "Compression / EQ", config_id: c1.id)

Pedal.create(brand: "Boss", model: "Digital Delay DD-8", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Reverb RV-6", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Reverb RV-500", effect: "Reverb / Delay", config_id: c1.id)

Pedal.create(brand: "Boss", model: "Chorus Ensemble CE-5", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Flanger BF-3", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Loop Station RC-500", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Modulation MD-200", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Octave OC-5", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Phase Shifter PH-3", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Super Chorus CH-1", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Tremolo TR-2", effect: "Modulation", config_id: c1.id)

Pedal.create(brand: "Boss", model: "Blues Driver BD-2", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Distortion DS-1", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Heavy Metal HM-2w", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Hyper Drive OD-200", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Mega Distortion MD-2", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Metal Zone MT-2", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Overdrive OD-3", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Super Overdrive SD-1", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Boss", model: "Fuzz FZ-1w", effect: "Distortion / Gain", config_id: c1.id)

# Walrus #

Pedal.create(brand: "Walrus Audio", model: "Badwater", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Deep Six", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "EB-10", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Emissary", effect: "Compression / EQ", config_id: c1.id)

Pedal.create(brand: "Walrus Audio", model: "385", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Ages", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Eras", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Iron Horse", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Jupiter", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Kangra", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Voyager", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Warhorn", effect: "Distortion / Gain", config_id: c1.id)

Pedal.create(brand: "Walrus Audio", model: "Julia", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Lillian", effect: "Modulation", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Luminary", effect: "Modulation", config_id: c1.id)

Pedal.create(brand: "Walrus Audio", model: "ARP-87", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Descent", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Fathom", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Lore", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "R1", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Slo", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Walrus Audio", model: "Slotva", effect: "Reverb / Delay", config_id: c1.id)

Pedal.create(brand: "Wampler", model: "Ego", effect: "Compression / EQ", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Equator", effect: "Compression / EQ", config_id: c1.id)

Pedal.create(brand: "Wampler", model: "DBPlus", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Dracarys", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Euphoria", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Gearbox", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Paisley", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Pantheon", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "PlexiDrive", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Ratsbane", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Tumnus", effect: "Distortion / Gain", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Velvet", effect: "Distortion / Gain", config_id: c1.id)

Pedal.create(brand: "Wampler", model: "Faux", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Spring Reverb", effect: "Reverb / Delay", config_id: c1.id)
Pedal.create(brand: "Wampler", model: "Terraform", effect: "Reverb / Delay", config_id: c1.id)


puts 'Seeding done...'
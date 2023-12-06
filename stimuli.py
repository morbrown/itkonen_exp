import random
import json

nouns = [{'noun': "pallo", 'eng': "ball", 'freq': "high_frequency", 'stem': "no_stem_change"}, 
{'noun': "avain", 'eng': "key", 'freq': "high_frequency", 'stem': "stem_change"}, 
{'noun': "hammasharja", 'eng': "toothbrush", 'freq': "low_frequency", 'stem': "no_stem_change"},
{'noun': "jakoavain", 'eng': "wrench", 'freq': "low_frequency", 'stem': "stem_change"},]

embedded = ['lose', 'forget']

embedding_act = ['thought', 'said', 'knew']

embedding_pass = ['was.thought', 'was.said', 'was.known']

preps = ['in.village', 'in.town', 'in.neighborhood']

nom_names = ["Pekka", "Arto", "Helvi", "Antti", "Otto", "Kari"]

gen_names = ["Eeron", "Matin", "Mikon", "Tuulin", "Jorman", "Jaanan"]

shuffled_nouns = nouns[:]
random.shuffle(shuffled_nouns)

nouns_active = shuffled_nouns[:2]
nouns_passive = shuffled_nouns[2:]


def make_active_stims(list_dicts):
    active_stims = []
    for dict in list_dicts:
        stim = ''
        stim += '_'
        embedded_v = random.sample(embedded, 1)
        stim = embedded_v[0] + " " + stim
        gen_name = random.sample(gen_names, 1)
        stim = gen_name[0] + " " + stim
        embedding = random.sample(embedding_act, 1)
        stim = embedding[0] + " " + stim
        nom_name = random.sample(nom_names, 1)
        stim = nom_name[0] + " " + stim
        dict_new = {'stim': stim} 
        dict_final = {**dict_new, **dict}
        active_stims.append(dict_final)
    return active_stims

make_active_stims(nouns_active)

def make_passive_stims(list_dicts):
    passive_stims = []
    for dict in list_dicts:
        stim = ''
        stim += '_'
        embedded_v = random.sample(embedded, 1)
        stim = embedded_v[0] + " " + stim
        gen_name = random.sample(gen_names, 1)
        stim = gen_name[0] + " " + stim
        embedding = random.sample(embedding_pass, 1)
        stim = embedding[0] + " " + stim
        prep = random.sample(preps, 1)
        stim = prep[0] + " " + stim
        dict_new = {'stim': stim}
        dict_final = {**dict_new, **dict}
        passive_stims.append(dict_final)
    return passive_stims

make_passive_stims(nouns_passive)

def make_all_stims(list1, list2):
    all_stims = make_active_stims(list1) + make_passive_stims(list2)
    return(all_stims)

make_all_stims(nouns_active, nouns_passive)


import random 

names = ["John", "Mary"]
verbs = ["runs,", "walks"]

def create_stimuli(list_names, list_verbs):
    list_stims = []
    for name in list_names:
        stim = ""
        verb = random.sample(list_verbs, 1)[0]
        print(name)
        print(verb)
        stim = name + " " + verb
        list_stims.append(stim)
    return list_stims

create_stimuli(names, verbs)
        







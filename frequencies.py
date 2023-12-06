import csv
import pandas as pd
from pandas import *


def is_word_in_doc(filename, word):
    with open(filename) as f:
        for line in f:
            if word in line:
                line_as_list = line.split()
                freq = float(line_as_list[3].replace("(", ""))
                return freq


is_word_in_doc("finnish_corpus_long.txt", "ja")

data = read_csv("all_case_forms.csv")

def csv_into_lists(filename):
    list_dicts = []
    with open(filename) as f:
        reader = csv.reader(f)
        row1 = next(reader)
        for word in row1:
            all = data[word].tolist()
            dict = {word: all}
            list_dicts.append(dict)
        return list_dicts

nouns_and_forms_list = csv_into_lists("all_case_forms.csv")
           
def get_frequencies_all(filename, list_forms):
    list_freqs = []
    for word_dict in list_forms:
        forms_of_word = list(word_dict.values())[0]
        word = list(word_dict.keys())[0]
        total_freq = 0
        for form in forms_of_word:
            freq_form = is_word_in_doc(filename, form)
            if freq_form != None:
                total_freq += float(freq_form)
        list_freqs.append({word: total_freq})
    print(list_freqs)

get_frequencies_all("finnish_corpus_long.txt", nouns_and_forms_list)





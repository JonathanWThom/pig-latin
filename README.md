# _Pig Latin Translator_

#### _Translates User Input text to Pig Latin, 10/26/2016_

#### By _**Tracie Weitzman and Jonathan Thom**_

## Description

* The program performs the following steps of behavior driven development:

##### 1 The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Input: 3
Output: 3

##### 2 The program adds "ay" to single-letter words beginning with a vowel.
Input: i
Output: iay
###### 2.1 also for capital letters
Input: I
Output: Iay

##### 3 if a multicharacter word starting with a vowel, add "ay" to the end
Input: outcome
Output: outcomeay
###### 3.1 also for capital letters

##### 4 adds "ay" to single letter words beginning with consonant
Input: t
Output: tay
###### 4.1 also for capital letters

##### 5 for a multicharacter word that starts with a consonant followed by a vowel, moves first consonant to the end of word
Input: yes
Output: esy
###### 5.1 also for capital letters

##### 6 for same multicharacter word that starts with a consonant followed by a vowel, add "ay" to the end of word
Input: yes
Output: esyay
###### 6.1 also for capital letters

##### 7 for a multicharacter word beginning with more than one consonant, move all initial consonants to the end of the word
Input: there
Output: ereth
###### 7.1 also for capital letters

##### 8 for a multicharacter word beginning with more than one consonant, add "ay" to the end of word
Input: there
Output: erethay
###### 8.1 also for capital letters

##### 9 for a multicharacter word starting with "QU", move "QU" to the end of the word
Input: queen
Output: eenqu
###### 9.1 also for capital letters

##### 10 for a multicharacter word starting with "QU", add "ay" to the end of word
Input: queen
Output: eenquay
###### 10.1 also for capital letters

##### 11 for a multicharacter word where q follows starting string of consonants, move all consonants and "U" that follows "Q" to the end of the word
Input: squeal
Output: ealsqu
###### 11.1 also for capital letters

##### 12 for a multicharacter word where q follows starting string of consonants, add "ay" to the end of word
Input: squeal
Output: ealsquay
###### 12.1 also for capital letters

##### 13 Steps 1-12 work for multi word strings
Input: Pig Latin Translator
Output: igPay atinLay ranslatorTay

## Setup/Installation Requirements

* _Works in any web browser._

## Support and contact details

_Contact us on Github at weitzwoman or jonathanwthom_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQuery_

### License

*Copyright under the MIT License, thanks to Epicodus.*

Copyright (c) 2016 **_Tracie Weitzman, Jonathan Thom_**

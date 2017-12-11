#!/usr/bin/perl -l
use strict;
use warnings;
use List::Util qw/shuffle/;

my @shuffled;

while(<>) {
    chomp;
	my @words = split;
	push (@shuffled, shuffle @words);
}

print join(" ", @shuffled);
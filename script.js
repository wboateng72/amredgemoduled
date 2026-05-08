const scheduleDays = [
  {
    label: "Day 1",
    short: "",
    theme: "AMR foundations, sequencing context, bioinformatics orientation, and Linux setup",
    summary:
      "The first day moves from AMR concepts and sequencing context into introductory platforms, data management, and the Linux practical that supports the rest of the week.",
    focus: ["AMR introduction", "Sequencing workflow", "Bioinformatics platforms", "WHONET", "Linux practical"],
    sessions: [
      {
        time: "08:30 - 09:00",
        type: "Plenary",
        title: "Registration, introductions, and opening remarks",
        details: "Course welcome, participant introductions, and opening remarks by Prof Beverly Egyir.",
        faculty: "Prof Beverly Egyir",
      },
      {
        time: "09:00 - 10:00",
        type: "Theory",
        title: "Introduction to AMR",
        details: "Opening scientific context for the module and the broader AMR surveillance agenda.",
        faculty: "Prof Beverly Egyir",
      },
      {
        time: "10:00 - 10:20",
        type: "Theory",
        title: "DNA extraction and sequencing platform workflow",
        details: "Introductory sequencing workflow context for the downstream analysis sessions.",
        faculty: "Grebstad Amuasi",
      },
      {
        time: "10:20 - 10:30",
        type: "Break",
        title: "Break",
        details: "Short transition break.",
      },
      {
        time: "10:30 - 10:50",
        type: "Theory",
        title: "Introduction to bioinformatics and analysis platforms",
        details: "A grounding session on the digital tools and environments that support the module.",
        faculty: "Christian Owusu-Nyantakyi",
      },
      {
        time: "10:50 - 11:10",
        type: "Theory",
        title: "Data management and WHONET",
        details: "Data organization and surveillance-oriented data handling practices.",
        faculty: "Alfred Bortey",
      },
      {
        time: "11:10 - 11:30",
        type: "Theory",
        title: "Guest lecture",
        details: "A guest session positioned between the introductory theory blocks and the practical setup activities.",
      },
      {
        time: "11:30 - 12:00",
        type: "Discussion",
        title: "Group photos, grouping, and facilitator interaction",
        details: "Team formation and participant-facilitator interaction before the practical sessions begin.",
      },
      {
        time: "12:00 - 13:00",
        type: "Lunch",
        title: "Lunch",
        details: "Midday break.",
      },
      {
        time: "13:00 - 16:30",
        type: "Practical",
        title: "Introduction to Linux",
        details: "Terminal navigation, file formats, basic commands, and Bash scripting in preparation for the genomic workflow.",
        faculty: "Christian, William, Grebstad",
      },
      {
        time: "16:30 - 17:00",
        type: "Discussion",
        title: "Wrap-up and discussion",
        details: "End-of-day consolidation and participant questions.",
      },
    ],
  },
  {
    label: "Day 2",
    short: "",
    theme: "Read quality control, trimming, assembly concepts, mapping, and pipeline demonstration",
    summary:
      "The second day is centered on the core analytical transition from raw reads to interpretable genome outputs, combining QC, trimming, assembly thinking, reference-based analysis, and a demonstration of pipeline automation.",
    focus: ["Read QC", "Trimming", "Genome assembly", "Reference mapping", "rMAP demonstration", "Assembly QC"],
    sessions: [
      {
        time: "08:30 - 10:30",
        type: "Practical",
        title: "Quality control of sequenced reads",
        details: "Quality assessment and trimming using FastQC, MultiQC, NanoPlot, NanoQC, Trimmomatic, and fastp.",
        faculty: "William with Christian and Grebstad",
      },
      {
        time: "10:30 - 10:45",
        type: "Break",
        title: "Break",
        details: "Short transition break.",
      },
      {
        time: "10:45 - 12:00",
        type: "Theory",
        title: "Introduction to genome assembly",
        details: "A conceptual introduction to genome assembly before the practical work continues.",
        faculty: "Christian",
      },
      {
        time: "10:45 - 12:00",
        type: "Practical",
        title: "De novo assembly practical",
        details: "Illumina and ONT de novo assembly using Unicycler and Flye.",
        faculty: "Christian with William and Grebstad",
      },
      {
        time: "12:00 - 13:00",
        type: "Lunch",
        title: "Lunch",
        details: "Midday break.",
      },
      {
        time: "14:30 - 16:30",
        type: "Practical",
        title: "Reference-based assembly and rMAP demonstration",
        details: "Reference-based analysis with BWA, Minimap, SAMtools, and BCFtools, alongside a demonstration of the rMAP pipeline.",
        faculty: "William, Grebstad, Christian, and Dr. Gerald Mbowa",
      },
      {
        time: "16:30 - 17:00",
        type: "Practical",
        title: "Assembly quality assessment",
        details: "Completeness and contamination checks using QUAST and CheckM.",
        faculty: "William with Grebstad and Christian",
      },
    ],
  },
  {
    label: "Day 3",
    short: "",
    theme: "Genome submission, AMR detection, virulence profiling, and mobile element analysis",
    summary:
      "Day 3 moves from assembled or mapped genomes into biological interpretation, with a sequence of sessions focused on resistance determinants, virulence, plasmids, and mobile genetic elements.",
    focus: ["Genome submission", "AMR detection", "Virulence prediction", "Plasmids", "Mobile elements"],
    sessions: [
      {
        time: "08:30 - 08:50",
        type: "Practical",
        title: "Genome submission",
        details: "Preparing and submitting genomes to NCBI.",
        faculty: "William with Grebstad and Christian",
      },
      {
        time: "08:50 - 09:15",
        type: "Theory",
        title: "Resistance, virulence, and plasmid detection",
        details: "The conceptual bridge into AMR genes, virulence determinants, and plasmid analysis.",
        faculty: "Grebstad",
      },
      {
        time: "09:00 - 10:30",
        type: "Practical",
        title: "AMR gene detection tools I",
        details: "AMR analysis using ResFinder, CARD, and Pathogenwatch.",
        faculty: "Grebstad with William and Christian",
      },
      {
        time: "10:30 - 10:45",
        type: "Break",
        title: "Break",
        details: "Short transition break.",
      },
      {
        time: "10:45 - 11:30",
        type: "Practical",
        title: "AMR gene detection tools II",
        details: "Additional AMR profiling with AMRFinder Plus and ABRicate.",
        faculty: "Christian with William and Grebstad",
      },
      {
        time: "11:30 - 13:00",
        type: "Practical",
        title: "Pathogenicity and virulence factor prediction",
        details: "Virulence and pathogenicity analysis using Virulence Finder, Pathogenwatch, and Pathogen Finder 2.",
        faculty: "William with Grebstad and Christian",
      },
      {
        time: "13:00 - 14:00",
        type: "Lunch",
        title: "Lunch",
        details: "Midday break.",
      },
      {
        time: "14:00 - 16:30",
        type: "Practical",
        title: "Mobile genetic element prediction tools",
        details: "Plasmid and MGE analysis using Plasmid Finder, MOB-suite, and MGE-Finder.",
        faculty: "William with Grebstad and Christian",
      },
      {
        time: "16:30 - 17:00",
        type: "Discussion",
        title: "Wrap-up and discussion",
        details: "End-of-day synthesis and participant questions.",
      },
    ],
  },
  {
    label: "Day 4",
    short: "",
    theme: "Molecular typing, phylogenetics, tree visualization, and outbreak investigation",
    summary:
      "The fourth day brings the surveillance workflow into comparative genomics, with molecular typing, phylogenetic reasoning, visualization, and outbreak-focused interpretation.",
    focus: ["Molecular typing", "Phylogenetics", "Tree visualization", "Outbreak investigation"],
    sessions: [
      {
        time: "08:30 - 09:30",
        type: "Theory",
        title: "Molecular typing of bacterial species",
        details: "Typing concepts and their role in bacterial genomic surveillance.",
        faculty: "William",
      },
      {
        time: "09:30 - 10:30",
        type: "Practical",
        title: "Molecular typing practical",
        details: "Typing with MLST, cgMLST, SeqSero, Kleborate, SerotypeFinder, and PAst.",
        faculty: "Christian with William and Grebstad",
      },
      {
        time: "10:30 - 10:45",
        type: "Break",
        title: "Break",
        details: "Short transition break.",
      },
      {
        time: "10:45 - 11:30",
        type: "Theory",
        title: "Phylogenetics",
        details: "Theory session on phylogenetic inference and interpretation.",
        faculty: "Grebstad",
      },
      {
        time: "11:30 - 13:00",
        type: "Practical",
        title: "Phylogenetics and tree visualization",
        details: "Tree construction and interpretation using CSI-Phylogeny, BactInspector, Snippy, IQ-TREE, and iTOL.",
        faculty: "Christian with William and Grebstad",
      },
      {
        time: "13:00 - 14:00",
        type: "Lunch",
        title: "Lunch",
        details: "Midday break.",
      },
      {
        time: "14:00 - 15:00",
        type: "Practical",
        title: "Outbreak investigation",
        details: "Applying comparative genomic evidence to outbreak-oriented interpretation.",
        faculty: "Grebstad with Christian and William",
      },
      {
        time: "15:00 - 17:00",
        type: "Discussion",
        title: "Group discussions",
        details: "Collaborative interpretation in preparation for the final presentation day.",
      },
    ],
  },
  {
    label: "Day 5",
    short: "Presentation Day",
    theme: "Recap, group presentations, closing ceremony, and departure",
    summary:
      "The final day is presentation-focused. Participants recap the previous day, present their analyses, and close the module with certificates, remarks, and departure.",
    focus: ["Recap", "Group presentations", "Closing ceremony"],
    sessions: [
      {
        time: "08:30 - 09:00",
        type: "Discussion",
        title: "Recap of Day 4",
        details: "A short recap before the final group presentations begin.",
      },
      {
        time: "09:00 - 10:40",
        type: "Presentation",
        title: "Group presentations",
        details: "Participants present their dataset analyses and key AMR surveillance findings.",
      },
      {
        time: "10:40 - 12:00",
        type: "Plenary",
        title: "Closing ceremony",
        details: "Presentation of certificates, closing remarks, group photos, and departure.",
      },
    ],
  },
];

const outputMap = [
  {
    name: "raw_reads/",
    purpose: "Original FASTQ files will be kept in this folder.",
  },
  {
    name: "qc_raw/",
    purpose: "Pre-trimming QC reports from FastQC, MultiQC, NanoPlot, and NanoQC.",
  },
  {
    name: "trimmed_reads/",
    purpose: "Cleaned reads prepared for assembly or mapping.",
  },
  {
    name: "assemblies/",
    purpose: "De novo assembly outputs and the final FASTA files used downstream.",
  },
  {
    name: "mapping/ and variants/",
    purpose: "Sorted BAM files, coverage summaries, and VCF outputs.",
  },
  {
    name: "assembly_qc/",
    purpose: "QUAST and CheckM quality reports.",
  },
  {
    name: "amr/",
    purpose: "AMRFinderPlus and ABRicate outputs for resistance profiling.",
  },
  {
    name: "phylogeny/",
    purpose: "Snippy alignments, core SNP outputs, and final trees.",
  },
];

const handoutModules = [
  {
    label: "Setup",
    short: "Environment Prep",
    title: "Training setup, folder structure, and environment preparation",
    summary:
      "This opening module establishes the project structure, installs conda and environments, naming discipline, and version logging needed for the rest of the week.",
    outcomes: [
      "Create a reproducible project folder under the home directory",
      "Install conda and configure channels",
      "Install task-specific environments",
    ],
    note: "Do not work directly from Downloads or Desktop during the training; keep the analysis in a dedicated project folder.",
    commandSets: [
      {
        title: "Create the project structure",
        context: "Start by building the working directory layout used throughout the handout.",
        code: String.raw`cd ~
mkdir -p AMR_training/{raw_reads,refs,qc_raw,qc_trimmed,trimmed_reads,assemblies,mapping,variants,assembly_qc,amr,phylogeny,}
cd ~/AMR_training`,
        expected: "Running ls should show folders such as raw_reads, refs, qc_raw, trimmed_reads, assemblies, mapping, variants, amr, and phylogeny.",
      },
      {
        title: "Configure conda channels",
        context: "Set up channels for more reproducible bioinformatics installs.",
        code: String.raw`conda config --add channels conda-forge
conda config --add channels bioconda
conda config --show channels`,
        expected: "The configured channel list should include conda-forge and bioconda.",
      },
      {
        title: "Create the training environments",
        context: "Keep environments task-specific to reduce dependency conflicts.",
        code: String.raw`# General QC and trimming
conda create -y -n amr_qc fastqc multiqc fastp trimmomatic nanoplot nanoqc seqkit pigz

# Assembly
conda create -y -n amr_assembly unicycler flye quast

# Mapping, variant analysis and phylogenetics
conda create -y -n amr_mapping bwa minimap2 samtools bcftools snippy iqtree

# AMR detection
conda create -y -n amr_amr ncbi-amrfinderplus abricate

# CheckM
conda create -y -n amr_checkm checkm-genome`,
        expected: "Each environment should resolve successfully or produce a documented error for instructor review.",
      },
    ],
  },
  {
    label: "Module 1",
    short: "Read QC",
    title: "Read QC with FastQC, MultiQC, NanoPlot, and NanoQC",
    summary:
      "Read QC is the first scientific checkpoint in the workflow, helping participants decide whether trimming, resequencing, or file review is needed.",
    outcomes: [
      "Run FastQC and MultiQC on Illumina data",
      "Run NanoPlot and NanoQC on long-read data",
      "Interpret key QC warnings before moving downstream",
    ],
    note: "Adjust the filename patterns if your workshop data uses slightly different sample suffixes.",
    commandSets: [
      {
        title: "Run FastQC and MultiQC on Illumina reads",
        context: "Generate per-file QC reports and then aggregate them into a single summary report.",
        code: String.raw`conda activate amr_qc
cd ~/AMR_training
mkdir -p qc_raw/fastqc logs

fastqc raw_reads/*_R1.fastq.gz raw_reads/*_R2.fastq.gz --outdir qc_raw/fastqc --threads 4
multiqc qc_raw/fastqc -o qc_raw/multiqc_raw`,
        expected: "FastQC should create one HTML and one ZIP per FASTQ file, and MultiQC should produce a combined qc_raw/multiqc_raw/multiqc_report.html report.",
      },
      {
        title: "Run NanoPlot on ONT reads",
        context: "Inspect read length and quality behavior for Oxford Nanopore data.",
        code: String.raw`mkdir -p qc_raw/nanoplot
NanoPlot --fastq raw_reads/KPN001_ONT/KPN001_ONT.fastq.gz --outdir qc_raw/nanoplot/KPN001 --threads 4`,
        expected: "NanoPlot should create a report, summary statistics, and read-length or quality plots.",
      },
      {
        title: "Run NanoQC on ONT reads",
        context: "Generate an additional QC view for long-read FASTQ files.",
        code: String.raw`mkdir -p qc_raw/nanoqc
nanoQC raw_reads/KPN001_ONT.fastq.gz -o qc_raw/nanoqc/KPN001`,
        expected: "NanoQC should write an HTML report with supporting QC plots for the long-read file.",
      },
    ],
  },
  {
    label: "Module 2",
    short: "Trimming",
    title: "Trimming with fastp and Trimmomatic",
    summary:
      "Trimming cleans adapters and low-quality sequence, but the handout repeatedly reminds participants to verify improvements rather than assuming trimming always helps.",
    outcomes: [
      "Trim paired-end reads with fastp",
      "Run Trimmomatic as an alternative workflow",
      "Compare raw and post-trimming QC reports",
    ],
    note: "The fastp paired-end loop below corrects a broken variable reference from the Word version so the copied command is runnable.",
    commandSets: [
      {
        title: "Trim paired-end reads with fastp",
        context: "Use fastp for a streamlined paired-end trimming workflow",
        code: String.raw`conda activate amr_qc
cd ~/AMR_training
mkdir -p trimmed_reads/fastp qc_trimmed/fastp

for r1 in raw_reads/*_R1_001.fastq.gz; do
  sample=$(basename "$r1" _R1_001.fastq.gz)
  r2="raw_reads/\${sample}_R2_001.fastq.gz"
  fastp -i "$r1" -I "$r2" \
    -o trimmed_reads/fastp/\${sample}_R1.trim.fastq.gz \
    -O trimmed_reads/fastp/\${sample}_R2.trim.fastq.gz \
    --detect_adapter_for_pe \
    --qualified_quality_phred 20 \
    --length_required 50 \
    --thread 4
done`,
        expected: "The output should include trimmed paired FASTQ files plus one HTML and one JSON report per sample.",
      },
      {
        title: "Trim paired-end reads with Trimmomatic",
        context: "Keep Trimmomatic available as an alternative trimming workflow.",
        code: String.raw`mkdir -p trimmed_reads/trimmomatic

for r1 in raw_reads/*_R1_001.fastq.gz; do
  sample=$(basename "$r1" _R1_001.fastq.gz)
  r2="raw_reads/\${sample}_R2_001.fastq.gz"
  trimmomatic PE -threads 4 -phred33 \
    "$r1" "$r2" \
    trimmed_reads/trimmomatic/\${sample}_R1.paired.fastq.gz \
    trimmed_reads/trimmomatic/\${sample}_R1.unpaired.fastq.gz \
    trimmed_reads/trimmomatic/\${sample}_R2.paired.fastq.gz \
    trimmed_reads/trimmomatic/\${sample}_R2.unpaired.fastq.gz \
    ILLUMINACLIP:raw_reads/NexteraPE-PE.fa:2:30:10 \
    SLIDINGWINDOW:4:20 MINLEN:50
done`,
        expected: "Trimmomatic should create paired and unpaired outputs, with the paired files used for most downstream analyses.",
      },
      {
        title: "Run post-trimming QC",
        context: "Always compare raw and trimmed data before moving on.",
        code: String.raw`mkdir -p qc_trimmed/fastqc qc_trimmed/multiqc
fastqc trimmed_reads/fastp/*.fastq.gz --outdir qc_trimmed/fastqc --threads 4
multiqc qc_raw qc_trimmed -o qc_trimmed/multiqc`,
        expected: "A combined MultiQC report should help you see whether trimming reduced adapters and improved low-quality read ends.",
      },
    ],
  },
  {
    label: "Module 3",
    short: "Assembly",
    title: "De novo assembly with Unicycler and Flye",
    summary:
      "This module reconstructs draft genomes for downstream AMR detection, gene-content analysis, and comparative genomics.",
    outcomes: [
      "Run short-read assembly with Unicycler",
      "Run long-read assembly with Flye",
      "Prepare standardized final FASTA files for downstream analyses",
    ],
    note: "Assembly quality still needs to be checked later with QUAST and CheckM before interpretation.",
    commandSets: [
      {
        title: "Run short-read assembly with Unicycler",
        context: "Assemble Illumina or hybrid data into draft bacterial genomes.",
        code: String.raw`conda activate amr_assembly
cd ~/AMR_training
mkdir -p assemblies/unicycler

for r1 in trimmed_reads/fastp/*_R1.trim.fastq.gz; do
  sample=$(basename "$r1" _R1.trim.fastq.gz)
  r2="trimmed_reads/fastp/\${sample}_R2.trim.fastq.gz"
  unicycler -1 "$r1" -2 "$r2" -o assemblies/unicycler/\${sample} -t 4 --min_fasta_length 200
done`,
        expected: "Each sample directory should contain assembly.fasta, assembly.gfa, and a Unicycler log.",
      },
      {
        title: "Run long-read assembly with Flye",
        context: "Use Flye for ONT long-read assembly with an estimated genome size.",
        code: String.raw`mkdir -p assemblies/flye
flye --nano-hq raw_reads/KPN001.fastq.gz --out-dir assemblies/flye/KPN001 --threads 4 --genome-size 5m`,
        expected: "Flye should produce assembly.fasta, assembly_graph.gfa, flye.log, and assembly_info.txt.",
      },
      {
        title: "Standardize the final assembly filenames",
        context: "Create a clean final assembly folder for QC, AMR, and phylogenetic steps.",
        code: String.raw`mkdir -p assemblies/final
for f in assemblies/unicycler/*/assembly.fasta; do
  sample=$(basename "$(dirname "$f")")
  cp "$f" assemblies/final/\${sample}.fasta
done`,
        expected: "The assemblies/final directory should contain one FASTA per sample for downstream analysis.",
      },
    ],
  },
  {
    label: "Module 4",
    short: "Mapping + Variants",
    title: "Reference-based mapping and variant calling",
    summary:
      "Reference-based analysis supports SNP interpretation, outbreak work, and mutation-level review when a suitable genome is available.",
    outcomes: [
      "Index the reference genome cleanly",
      "Map Illumina and ONT data",
      "Inspect coverage and call variants with BCFtools",
    ],
    note: "Low coverage or poor mapping quality can make AMR mutation calls and SNP interpretations unreliable.",
    commandSets: [
      {
        title: "Prepare the reference genome",
        context: "Index the reference before running any mapping step.",
        code: String.raw`conda activate amr_mapping
cd ~/AMR_training
mkdir -p refs mapping variants

# Put your reference genome at refs/reference.fasta
samtools faidx refs/reference.fasta
bwa index refs/reference.fasta`,
        expected: "The refs directory should contain the faidx file and the BWA index outputs.",
      },
      {
        title: "Map Illumina reads with BWA-MEM",
        context: "Generate sorted and indexed BAM files for each paired-end sample.",
        code: String.raw`for r1 in trimmed_reads/fastp/*_R1.trim.fastq.gz; do
  sample=$(basename "$r1" _R1.trim.fastq.gz)
  r2="trimmed_reads/fastp/\${sample}_R2.trim.fastq.gz"
  bwa mem -t 4 refs/reference.fasta "$r1" "$r2" | samtools sort -@ 4 -o mapping/\${sample}.bwa.sorted.bam
  samtools index mapping/\${sample}.bwa.sorted.bam
  samtools flagstat mapping/\${sample}.bwa.sorted.bam > mapping/\${sample}.bwa.flagstat.txt
done`,
        expected: "Each sample should produce a sorted BAM, BAM index, and a flagstat summary.",
      },
      {
        title: "Inspect mapping depth",
        context: "Summarize coverage before trusting downstream variant interpretation.",
        code: String.raw`sample=KPN001
samtools stats mapping/\${sample}.bwa.sorted.bam > mapping/\${sample}.bwa.stats.txt
samtools depth -a mapping/\${sample}.bwa.sorted.bam > mapping/\${sample}.bwa.depth.tsv
awk '{sum+=$3; n++} END {print "Mean depth:", sum/n}' mapping/\${sample}.bwa.depth.tsv`,
        expected: "The command should print a mean depth estimate and create stats and depth files for review.",
      },
      {
        title: "Call variants with BCFtools",
        context: "Create indexed VCF outputs for downstream inspection and comparison.",
        code: String.raw`for bam in mapping/*.bwa.sorted.bam; do
  sample=$(basename "$bam" .bwa.sorted.bam)
  bcftools mpileup -Ou -f refs/reference.fasta "$bam" | bcftools call -mv -Oz -o variants/\${sample}.vcf.gz
  bcftools index variants/\${sample}.vcf.gz
  bcftools stats variants/\${sample}.vcf.gz > variants/\${sample}.bcftools.stats.txt
  bcftools view variants/\${sample}.vcf.gz | head -n 30 > variants/\${sample}.vcf.preview.txt
done`,
        expected: "Each sample should produce a compressed VCF, VCF index, stats file, and preview text file.",
      },
    ],
  },
  {
    label: "Module 5",
    short: "Assembly QC",
    title: "Assembly QC with QUAST and CheckM",
    summary:
      "Assembly QC determines whether an assembly is good enough for AMR profiling, typing, annotation, or phylogenetic analysis.",
    outcomes: [
      "Run QUAST to summarize contiguity and assembly size",
      "Run CheckM to estimate completeness and contamination",
      "Flag suspicious assemblies before making biological claims",
    ],
    note: "Do not interpret AMR absence confidently from a poor or incomplete assembly.",
    commandSets: [
      {
        title: "Run QUAST on final assemblies",
        context: "Generate the core assembly contiguity report.",
        code: String.raw`conda activate amr_assembly
cd ~/AMR_training
mkdir -p assembly_qc/quast

quast.py assemblies/final/*.fasta -o assembly_qc/quast -t 4 -m 200`,
        expected: "QUAST should create report.html, report.tsv, and transposed_report.tsv inside assembly_qc/quast.",
      },
      {
        title: "Run CheckM lineage workflow",
        context: "Estimate completeness and contamination for the final assemblies.",
        code: String.raw`conda activate amr_checkm
cd ~/AMR_training
mkdir -p assembly_qc/checkm

checkm lineage_wf -x fasta -t 4 assemblies/final assembly_qc/checkm`,
        expected: "CheckM should create lineage results",
      },
      {
        title: "Create a CheckM summary table",
        context: "Write a compact tabular summary for reporting and review.",
        code: String.raw`checkm qa assembly_qc/checkm/lineage.ms assembly_qc/checkm -o 2 -f assembly_qc/checkm/checkm_summary.tsv --tab_table`,
        expected: "The summary TSV should contain completeness, contamination, and strain heterogeneity estimates.",
      },
    ],
  },
  {
    label: "Module 6",
    short: "AMR Detection",
    title: "AMR detection with AMRFinderPlus and ABRicate",
    summary:
      "This module turns assemblies into resistance predictions.",
    outcomes: [
      "Capture AMRFinderPlus software and database versions",
      "Run AMRFinderPlus on final assemblies",
      "Compare ABRicate outputs across selected databases",
    ],
    note: "Genomic AMR predictions support surveillance, but they should not be treated as clinical susceptibility results without validation.",
    commandSets: [
      {
        title: "Record AMRFinderPlus database information",
        context: "Update the database when internet is available",
        code: String.raw`conda activate amr_amr
cd ~/AMR_training
mkdir -p amr/amrfinder

# Update database when internet is available
amrfinder -u

# Record software/database information
amrfinder --version
amrfinder --database_version`,
        expected: "The logs directory should contain the AMRFinderPlus software and database version files.",
      },
      {
        title: "Run AMRFinderPlus on assemblies",
        context: "Create per-sample AMR result tables with classes, subclasses, identity, and coverage.",
        code: String.raw`for asm in assemblies/final/*.fasta; do
  sample=$(basename "$asm" .fasta)
  amrfinder -n "$asm" -o amr/amrfinder/\${sample}.amrfinder.tsv --plus
done`,
        expected: "Each sample should produce an amrfinder TSV output in amr/amrfinder.",
      },
      {
        title: "Run ABRicate and build a summary",
        context: "Compare resistance calls across databases and build a simple summary table.",
        code: String.raw`mkdir -p amr/abricate
abricate --setupdb
abricate --list
abricate --version

for asm in assemblies/final/*.fasta; do
  sample=$(basename "$asm" .fasta)
  abricate --db ncbi "$asm" > amr/abricate/\${sample}.abricate_ncbi.tsv
  abricate --db resfinder "$asm" > amr/abricate/\${sample}.abricate_resfinder.tsv
done

abricate --summary amr/abricate/*.abricate_ncbi.tsv > amr/abricate/abricate_ncbi_summary.tsv`,
        expected: "The amr/abricate directory should contain per-sample outputs and a summary table.",
      },
    ],
  },
  {
    label: "Module 7",
    short: "Phylogenetics",
    title: "Phylogenetics with BactInspector, Snippy, and IQ-TREE",
    summary:
      "The phylogenetics module brings species confirmation, core SNP analysis, and maximum-likelihood tree inference together for comparative genomic interpretation.",
    outcomes: [
      "Confirm species or closest reference candidates",
      "Run Snippy and build a core SNP alignment",
      "Infer a tree and interpret it cautiously in context",
    ],
    note: "A genomic cluster does not automatically prove direct transmission; always review metadata, reference choice, and outbreak context.",
    commandSets: [
      {
        title: "Check species and closest reference with BactInspector",
        context: "Use a reference-checking step before building a single-species phylogeny.",
        code: String.raw`# Example placeholder; replace database path with your workshop database
bactinspector --help
bactinspector --query assemblies/final/KPN001.fasta --out phylogeny/bactinspector_KPN001`,
        expected: "The result files should help confirm species identity and support reference selection.",
      },
      {
        title: "Run Snippy for each sample",
        context: "Create per-sample SNP calls and aligned outputs against the chosen reference.",
        code: String.raw`conda activate amr_mapping
cd ~/AMR_training
mkdir -p phylogeny/snippy

for r1 in trimmed_reads/fastp/*_R1.trim.fastq.gz; do
  sample=$(basename "$r1" _R1.trim.fastq.gz)
  r2="trimmed_reads/fastp/\${sample}_R2.trim.fastq.gz"
  snippy --cpus 4 --outdir phylogeny/snippy/\${sample} --ref refs/reference.fasta --R1 "$r1" --R2 "$r2"
done`,
        expected: "Each sample should produce snps.vcf, snps.tab, snps.aligned.fa, and related outputs.",
      },
      {
        title: "Build the core SNP alignment",
        context: "Generate the combined alignment used for phylogenetic inference.",
        code: String.raw`snippy-core --ref refs/reference.fasta --prefix phylogeny/core phylogeny/snippy/*`,
        expected: "The phylogeny directory should contain core.aln, core.full.aln, core.vcf, and related files.",
      },
      {
        title: "Infer the tree with IQ-TREE",
        context: "Create a maximum-likelihood tree with model selection and bootstrap support.",
        code: String.raw`cd ~/AMR_training
mkdir -p phylogeny/iqtree
cp phylogeny/core.aln phylogeny/iqtree/core.aln
cd phylogeny/iqtree

iqtree2 -s core.aln -m MFP -B 1000 -T AUTO
# If iqtree2 is not available, try:
# iqtree -s core.aln -m MFP -bb 1000 -nt AUTO`,
        expected: "IQ-TREE should produce a treefile, log, iqtree report, and support files for visualization in tools like iTOL.",
      },
    ],
  },
];

const projectSections = [
  {
    title: "Quality Control of Reads",
    questions: [
      "What did you observe from read quality control using FastQC, MultiQC, NanoPlot, or NanoQC?",
      "Did you trim or filter the reads? If yes, which tool did you use and why?",
      "After trimming or filtering, did the read quality improve?",
    ],
  },
  {
    title: "Genome Assembly or Mapping",
    questions: [
      "Which assembly approach did you use?",
      "Why did you use this approach?",
      "Which tool or tools did you use for this step?",
      "What was the main output from this step?",
    ],
  },
  {
    title: "Assembly Quality",
    questions: [
      "How good was your assembly? Report simple measures such as contig count, genome size, N50, completeness, or contamination.",
      "Which tool was applied in assessing assembly quality?",
      "Do you think the assembly quality is good enough for downstream analysis? Briefly explain your answer.",
    ],
  },
  {
    title: "AMR, Virulence, and Mobile Elements",
    questions: [
      "Which antimicrobial resistance genes or mutations did you find?",
      "Which virulence genes or pathogenicity factors did you find?",
      "Did you detect any plasmids or other mobile genetic elements?",
      "What do these findings suggest about the isolate or isolates?",
    ],
  },
  {
    title: "Typing and Phylogeny",
    questions: [
      "What species and sequence type or other typing result did you identify?",
      "Which tools did you employ for bacterial subtyping?",
      "What did the phylogenetic analysis or tree show?",
      "What SNP threshold will you consider appropriate to define close genetic relatedness?",
      "Which isolates are confirmed to belong to the transmission cluster? Indicate also, which ones are excluded from the transmission cluster and explain."
    ],
  },
  {
    title: "Interpretation and Application",
    questions: [
      "What is the most important AMR message from your analysis?",
      "What are two limitations of your analysis?",
      "How can the tools learned in this course be applied in your lab, hospital, or AMR surveillance work?",
      "If you had more time, what would be your next step for this project?",
    ],
  },
];

const downloads = [
  {
    filetype: "PDF",
    title: "Program Outline",
    filename: "AMR EDGE PROGRAM OUTLINE - MODULE D.pdf",
    size: "305 KB",
    summary: "The outline covering the five-day course flow.",
    tags: ["Outline", "Schedule", "Faculty"],
  },
  {
    filetype: "PDF",
    title: "Final Project Questions",
    filename: "FINAL_PROJECT_QUESTIONS.pdf",
    size: "15 KB",
    summary: "The final group-project brief covering QC, assembly, AMR findings, phylogeny, outbreak analysis, interpretation, and presentation structure.",
    tags: ["Project", "Presentation", "Assessment"],
  },
  {
    filetype: "PDF",
    title: "Practical Handout",
    filename: "MODULE _D_Practical_Handout.pdf",
    size: "46 KB",
    summary: "The original practical handout to guide participants. It includes commands and notes.",
    tags: ["Handout", "Commands", "Reporting"],
  },
];

const elements = {
  overviewGrid: document.getElementById("overview-grid"),
  toolClusters: document.getElementById("tool-clusters"),
  dayTabs: document.getElementById("day-tabs"),
  schedulePanel: document.getElementById("schedule-panel"),
  moduleTabs: document.getElementById("module-tabs"),
  handoutPanel: document.getElementById("handout-panel"),
  outputMap: document.getElementById("output-map"),
  projectAccordion: document.getElementById("project-accordion"),
  downloadsGrid: document.getElementById("downloads-grid"),
  navToggle: document.getElementById("nav-toggle"),
  siteNav: document.getElementById("site-nav"),
  scrollProgress: document.getElementById("scroll-progress"),
};

let activeDayIndex = 0;
let activeModuleIndex = 0;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatCommandCode(value) {
  return value.replaceAll("\\${", "${");
}

function renderOverview() {
  elements.overviewGrid.innerHTML = overviewCards
    .map(
      (card) => `
        <article class="overview-card reveal">
          <p class="eyebrow">${card.title}</p>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
          <ul>
            ${card.bullets.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  elements.toolClusters.innerHTML = supportCards
    .map(
      (card) => `
        <article class="tool-cluster reveal">
          <p class="eyebrow">${card.title}</p>
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <div class="tool-chip-list">
            ${card.items.map((item) => `<span class="tool-chip">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderDayTabs() {
  if (!elements.dayTabs) {
    return;
  }

  elements.dayTabs.innerHTML = scheduleDays
    .map(
      (day, index) => `
        <button
          class="day-tab ${index === activeDayIndex ? "is-active" : ""}"
          type="button"
          data-day-index="${index}"
          aria-pressed="${index === activeDayIndex ? "true" : "false"}"
        >
          <strong>${day.label}</strong>
          <small>${day.short}</small>
        </button>
      `
    )
    .join("");

  elements.dayTabs.querySelectorAll(".day-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeDayIndex = Number(button.dataset.dayIndex);
      renderDayTabs();
      renderSchedulePanel();
    });
  });
}

function renderSchedulePanel() {
  if (!elements.schedulePanel) {
    return;
  }

  const day = scheduleDays[activeDayIndex];

  elements.schedulePanel.innerHTML = `
    <div class="schedule-header">
      <span class="schedule-badge">${day.label}</span>
      <h3>${day.theme}</h3>
      <p class="schedule-summary">${day.summary}</p>
      <div class="day-tools">
        ${day.focus.map((item) => `<span class="workflow-chip">${item}</span>`).join("")}
      </div>
    </div>
    <div class="session-list">
      ${day.sessions
        .map(
          (session) => `
            <article class="session-card">
              <div class="session-time">${session.time}</div>
              <div>
                <div class="session-meta">
                  <span class="session-chip" data-type="${session.type}">${session.type}</span>
                  ${session.faculty ? `<span class="faculty-badge">${session.faculty}</span>` : ""}
                </div>
                <h4>${session.title}</h4>
                <p>${session.details}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderOutputMap() {
  if (!elements.outputMap) {
    return;
  }

  elements.outputMap.innerHTML = outputMap
    .map(
      (item) => `
        <div class="output-item">
          <strong>${item.name}</strong>
          <span>${item.purpose}</span>
        </div>
      `
    )
    .join("");
}

function renderModuleTabs() {
  if (!elements.moduleTabs) {
    return;
  }

  elements.moduleTabs.innerHTML = handoutModules
    .map(
      (module, index) => `
        <button
          class="module-tab ${index === activeModuleIndex ? "is-active" : ""}"
          type="button"
          data-module-index="${index}"
          aria-pressed="${index === activeModuleIndex ? "true" : "false"}"
        >
          <strong>${module.label}</strong>
          <small>${module.short}</small>
        </button>
      `
    )
    .join("");

  elements.moduleTabs.querySelectorAll(".module-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeModuleIndex = Number(button.dataset.moduleIndex);
      renderModuleTabs();
      renderHandoutPanel();
    });
  });
}

function renderHandoutPanel() {
  if (!elements.handoutPanel) {
    return;
  }

  const module = handoutModules[activeModuleIndex];

  elements.handoutPanel.innerHTML = `
    <div class="handout-header">
      <div class="handout-header-copy">
        <span class="schedule-badge">${module.label}</span>
        <h3>${module.title}</h3>
        <p class="handout-summary">${module.summary}</p>
      </div>
      <button class="module-copy-button" type="button" data-copy-module="${activeModuleIndex}">
        Copy module commands
      </button>
    </div>

    <div class="handout-meta-grid">
      <article class="module-info-card">
        <p class="eyebrow">Learning Outcomes</p>
        <ul>
          ${module.outcomes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>

      <article class="module-info-card">
        <p class="eyebrow">Working Note</p>
        <p>${module.note}</p>
      </article>
    </div>

    <div class="command-stack">
      ${module.commandSets
        .map((set, index) => {
          const codeId = `module-code-${activeModuleIndex}-${index}`;
          return `
            <article class="command-card">
              <div class="command-card-top">
                <div>
                  <p class="eyebrow">Command Pack ${index + 1}</p>
                  <h4>${set.title}</h4>
                </div>
                <button class="copy-button" type="button" data-copy-source="${codeId}">
                  Copy
                </button>
              </div>
              <p class="command-context">${set.context}</p>
              <pre class="code-block"><code id="${codeId}">${escapeHtml(formatCommandCode(set.code))}</code></pre>
              ${
                set.expected
                  ? `<p class="expected-output"><strong>Expected output:</strong> ${set.expected}</p>`
                  : ""
              }
            </article>
          `;
        })
        .join("")}
    </div>
  `;

  attachCopyHandlers(elements.handoutPanel);
}

function renderProjectAccordion() {
  if (!elements.projectAccordion) {
    return;
  }

  elements.projectAccordion.innerHTML = projectSections
    .map(
      (section, index) => `
        <article class="accordion-item ${index === 0 ? "is-open" : ""}">
          <button
            class="accordion-button"
            type="button"
            aria-expanded="${index === 0 ? "true" : "false"}"
          >
            <div>
              <small>Project prompt</small>
              <span>${section.title}</span>
            </div>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-panel" style="${index === 0 ? "max-height: 500px;" : ""}">
            <div class="accordion-panel-inner">
              <ul>
                ${section.questions.map((question) => `<li>${question}</li>`).join("")}
              </ul>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  elements.projectAccordion.querySelectorAll(".accordion-item").forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const panel = item.querySelector(".accordion-panel");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      elements.projectAccordion.querySelectorAll(".accordion-item").forEach((entry) => {
        entry.classList.remove("is-open");
        entry.querySelector(".accordion-button").setAttribute("aria-expanded", "false");
        entry.querySelector(".accordion-panel").style.maxHeight = "0";
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
}

function renderDownloads() {
  if (!elements.downloadsGrid) {
    return;
  }

  elements.downloadsGrid.innerHTML = downloads
    .map(
      (item) => `
        <article class="downloads-card reveal">
          <div class="download-top">
            <div>
              <p class="eyebrow">${item.title}</p>
              <h3>${item.title}</h3>
            </div>
            <span class="download-filetype">${item.filetype}</span>
          </div>
          <p>${item.summary}</p>
          <div class="download-tags">
            <span class="download-tag">${item.size}</span>
            ${item.tags.map((tag) => `<span class="download-tag">${tag}</span>`).join("")}
          </div>
          <a class="button button-primary" href="${item.filename}" download>
            Download file
          </a>
        </article>
      `
    )
    .join("");
}

function setupAccordionHeights() {
  const firstOpenPanel = document.querySelector(".accordion-item.is-open .accordion-panel");
  if (firstOpenPanel) {
    firstOpenPanel.style.maxHeight = `${firstOpenPanel.scrollHeight}px`;
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  }
}

function flashCopyState(button, didCopy) {
  const originalText = button.textContent;
  button.textContent = didCopy ? "Copied" : "Copy failed";
  button.classList.add("is-copied");

  window.setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("is-copied");
  }, 1400);
}

function attachCopyHandlers(root) {
  root.querySelectorAll("[data-copy-source], [data-copy-module]").forEach((button) => {
    button.addEventListener("click", async () => {
      let textToCopy = "";

      if (button.dataset.copySource) {
        const codeElement = document.getElementById(button.dataset.copySource);
        textToCopy = codeElement ? codeElement.textContent : "";
      }

      if (button.dataset.copyModule) {
        const module = handoutModules[Number(button.dataset.copyModule)];
        textToCopy = module.commandSets
          .map((set) => `# ${set.title}\n${formatCommandCode(set.code)}`)
          .join("\n\n");
      }

      const didCopy = textToCopy ? await copyText(textToCopy) : false;
      flashCopyState(button, didCopy);
    });
  });
}

function setupRevealObserver() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function setupStatsCounter() {
  const stats = document.querySelectorAll(".stat-number");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const stat = entry.target;
        const target = Number(stat.dataset.target);
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          stat.textContent = Math.floor(progress * target).toString();

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            stat.textContent = target.toString();
          }
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(stat);
      });
    },
    { threshold: 0.6 }
  );

  stats.forEach((stat) => counterObserver.observe(stat));
}

function setupNavigation() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sectionLinks = links.filter((link) => link.getAttribute("href").startsWith("#"));
  const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href")));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeId = `#${entry.target.id}`;
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === activeId);
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-20% 0px -35% 0px",
    }
  );

  sections.forEach((section) => {
    if (section) {
      sectionObserver.observe(section);
    }
  });

  elements.navToggle.addEventListener("click", () => {
    const expanded = elements.navToggle.getAttribute("aria-expanded") === "true";
    elements.navToggle.setAttribute("aria-expanded", String(!expanded));
    elements.siteNav.classList.toggle("is-open", !expanded);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      elements.navToggle.setAttribute("aria-expanded", "false");
      elements.siteNav.classList.remove("is-open");
    });
  });
}

function setupScrollProgress() {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    elements.scrollProgress.style.width = `${progress}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
}

function init() {
  renderDayTabs();
  renderSchedulePanel();
  renderOutputMap();
  renderModuleTabs();
  renderHandoutPanel();
  renderProjectAccordion();
  renderDownloads();
  setupAccordionHeights();
  setupRevealObserver();
  setupStatsCounter();
  setupNavigation();
  setupScrollProgress();
}

init();

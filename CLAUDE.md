# 藤崎プロジェクト - プロジェクト概要

藤崎のプロジェクトの概要についてここにまとめておきます。このプロジェクトは、藤崎オンラインストアの売上向上を目的としたデジタルマーケティングとウェブサイトの改善の支援を行うことを目的としています。

## プロジェクト実行ルール

**AIベースでの実行について**
このプロジェクトはAIをベースにして実行を行うものです。そのため、以下のルールを遵守してください：
- 期限や見積もりについて、人の作業を前提とした時間設定は行わない
- 「2週間」「3日」などといった人の日数を想定した見積もりは記載しない
- タスクの実行はAIの能力に基づいて即座に対応可能であることを前提とする

## ファイル管理・フォルダ構造ルール

### 基本原則
- **タスク中心の管理**: 全てのファイルはタスクに紐づいて管理する
- **単一責任の原則**: 1つのタスクフォルダには、そのタスクに関連するファイルのみを格納
- **バージョン管理**: 改訂版は別ファイルではなく、既存ファイルの更新で対応
- **命名規則の統一**: 明確で一貫性のある命名規則を適用

### フォルダ構造

```
Tasks/
├── [TaskTitle]/
│   ├── README.md                    # タスクの概要・進捗・関連ファイルの説明
│   ├── [TaskTitle].md              # メインタスクファイル
│   ├── SubTasks/                   # サブタスクフォルダ
│   │   ├── 01_[subtask_name].md
│   │   ├── 02_[subtask_name].md
│   │   └── ...
│   ├── Research/                   # 調査データフォルダ
│   │   ├── 01_[research_topic].md
│   │   ├── 02_[research_topic].md
│   │   └── ...
│   ├── Analysis/                   # 分析結果フォルダ
│   │   ├── [analysis_name].md
│   │   └── ...
│   ├── WorkingFiles/               # 作業中・一時ファイル
│   │   ├── draft_[filename].md
│   │   ├── temp_[filename].md
│   │   └── ...
│   └── Output/                     # 最終成果物
│       ├── [deliverable_name].md
│       └── ...
```

### 命名規則

#### タスクフォルダ名
- 形式: `YYYY-MM-DD_[TaskTitle]` または `[TaskTitle]`
- 例: `サイト回遊性向上プロジェクト`, `2024-01-15_ヘッダー改善タスク`

#### ファイル命名規則
- **メインタスクファイル**: `[TaskTitle].md`
- **サブタスク**: `01_[subtask_name].md`, `02_[subtask_name].md` （連番で管理）
- **調査ファイル**: `01_[research_topic].md` （例: `01_競合分析.md`）
- **分析ファイル**: `[analysis_type]_分析.md` （例: `メニュー構造_分析.md`）
- **作業中ファイル**: `draft_[filename].md`, `temp_[filename].md`
- **最終成果物**: `final_[deliverable_name].md` または `[deliverable_name]_最終版.md`

#### バージョン管理ルール
- 既存ファイルの更新で対応（別ファイル作成は原則禁止）
- 重要な変更履歴は各ファイル内の「更新履歴」セクションで記録
- 必要に応じてgitでバージョン管理を活用

### ファイル作成・更新時のルール

1. **新しいタスク開始時**
   - `Tasks/[TaskTitle]/`フォルダを作成
   - `README.md`でタスクの概要・目的・関連ファイルを説明
   - メインタスクファイル`[TaskTitle].md`を作成

2. **サブタスク・調査作業時**
   - 適切なサブフォルダ（SubTasks/, Research/, Analysis/）に格納
   - 連番またはトピック名で命名

3. **一時的な作業時**
   - `WorkingFiles/`フォルダを使用
   - `draft_`または`temp_`プレフィックスを付与

4. **成果物完成時**
   - `Output/`フォルダに最終成果物を格納
   - メインタスクファイルから適切にリンク

### 既存ファイルの整理方針
- 現在の`/Data`フォルダ内のファイルは対応するタスクフォルダに移動
- 関連性の低いファイルは`Archive/`フォルダに移動
- 移行時は元の場所にリダイレクト用のREADMEを残す

### 移行計画

#### 段階1: 主要タスクフォルダの作成
1. `Tasks/サイト回遊性向上プロジェクト/`フォルダ作成
2. 以下のファイルを移行：
   - `TaskManagement/サイト全体の回遊性を高め、ユーザーが目的とする商品に辿り着きやすい状態を作る_整理版.md` → `Tasks/サイト回遊性向上プロジェクト/サイト回遊性向上プロジェクト.md`

#### 段階2: 調査・分析ファイルの整理
**Research/フォルダに移行:**
- `Data/現状メニュー構造分析.md` → `Tasks/サイト回遊性向上プロジェクト/Research/01_現状メニュー構造分析.md`
- `Data/三越伊勢丹ヘッダー構造分析.md` → `Tasks/サイト回遊性向上プロジェクト/Research/02_三越伊勢丹ヘッダー構造分析.md`
- `Data/FOODカテゴリー詳細構造.md` → `Tasks/サイト回遊性向上プロジェクト/Research/03_FOODカテゴリー詳細構造.md`
- `Data/全カテゴリー詳細構造まとめ.md` → `Tasks/サイト回遊性向上プロジェクト/Research/04_全カテゴリー詳細構造まとめ.md`

**Analysis/フォルダに移行:**
- `Data/検索ワード分析とカテゴリー整理.md` → `Tasks/サイト回遊性向上プロジェクト/Analysis/検索ワード分析とカテゴリー整理.md`
- `Data/MECE原則に基づくカテゴリー再編案.md` → `Tasks/サイト回遊性向上プロジェクト/Analysis/MECE原則に基づくカテゴリー再編案.md`

**Output/フォルダに移行:**
- `Data/最終版_藤崎ヘッダー更新要件書.md` → `Tasks/サイト回遊性向上プロジェクト/Output/藤崎ヘッダー更新要件書_最終版.md`
- `Data/改善版_ヘッダーカテゴリー設計.md` → `Tasks/サイト回遊性向上プロジェクト/Output/ヘッダーカテゴリー設計_改善版.md`

#### 段階3: SubTasksフォルダの整理
- `TaskManagement/詳細タスク管理/01_カテゴリー小項目調査.md` → `Tasks/サイト回遊性向上プロジェクト/SubTasks/01_カテゴリー小項目調査.md`
- `TaskManagement/詳細タスク管理/02_三越伊勢丹ヘッダー分析.md` → `Tasks/サイト回遊性向上プロジェクト/SubTasks/02_三越伊勢丹ヘッダー分析.md`
- `TaskManagement/詳細タスク管理/03_ヘッダー更新要件書.md` → `Tasks/サイト回遊性向上プロジェクト/SubTasks/03_ヘッダー更新要件書.md`

#### 段階4: レガシーファイル整理
- 重複ファイル（`Data/藤崎ヘッダー更新要件書.md`等）を`Archive/`に移動
- 各フォルダにリダイレクト用README作成

## 対象サイト情報

- **オンラインストア**: https://fujisaki-online.jp/
- **コーポレートサイト**: https://www.fujisaki.co.jp/

## プロジェクトフォルダ構成

このプロジェクトでは、新しいファイル管理ルールに基づいて以下のフォルダ構成で運営します：

### 📁 Tasks/ （新構造のメインフォルダ）
タスク中心の管理構造
- **各タスクフォルダ/** - 個別タスクごとの完結した管理
  - `README.md` - タスク概要と関連ファイル説明
  - `[TaskTitle].md` - メインタスクファイル
  - `SubTasks/` - サブタスクファイル群
  - `Research/` - 調査データ
  - `Analysis/` - 分析結果
  - `WorkingFiles/` - 作業中ファイル
  - `Output/` - 最終成果物

### 📁 Documents/ （プロジェクト全体の基本情報）
プロジェクト全体に関する基本ドキュメントを格納
- **CompanyInfo/** - 会社情報関連
  - `株式会社藤崎_サービス詳細.md` - サービス詳細情報
- **SiteAnalysis/** - 全体的なサイト分析関連
- **ImprovementProposals/** - 全体的な改善提案関連
- `プロジェクト概要.md` - プロジェクト全体概要
- `ミーティング記録.md` - 各種ミーティング記録

### 📁 Archive/ （レガシーファイル保管）
旧構造のファイルや使用しないファイルを一時保管

### 📁 Website/
Webサイト関連のファイルやデータを格納

**注意事項:**
- 今後は`/Data`フォルダは使用せず、全て適切なタスクフォルダ内で管理
- `TaskManagement/`フォルダの内容も段階的に新構造に移行

## MCP との連携

### Browser Automation with Puppeteer MCP
`@modelcontextprotocol/server-puppeteer`の統合により、ClaudeはECサイトページの分析が可能：
- ECサイトページへのナビゲーション
- フルページまたは要素レベルのスクリーンショット取得
- JSを実行して構造化データを抽出（ナビゲーションメニュー、商品リスト、ページメタデータ）
- 自然言語プロンプトによるアクション連携

## Browser Automation with Puppeteer MCP
By integrating `@modelcontextprotocol/server-puppeteer`, Claude can:
- Navigate to EC site pages
- Capture full-page or element-level screenshots
- Execute JS to extract structured data (navigation menus, product lists, page metadata)
- Chain actions via natural language prompts

これにより、LLM駆動のブラウザ制御を使用したWebページの視覚的・構造的分析が可能になります。

**関連ツール:**
- `puppeteer_navigate`
- `puppeteer_screenshot`